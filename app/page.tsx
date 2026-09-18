"use client";

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";

type ReceiptLine = {
  rawText: string;
  description: string | null;
  quantity: number | null;
  unit: string | null;
  unitPrice: number | null;
  amount: number | null;
  category: string | null;
  confidence: number;
  needsReview: boolean;
};

type Receipt = {
  merchant: string | null;
  date: string | null;
  currency: string | null;
  subtotal: number | null;
  tax: number | null;
  total: number | null;
  balance: number | null;
  lines: ReceiptLine[];
  warnings: string[];
};

type Theme = "light" | "dark";

const themeStorageKey = "tillmark-theme";

const money = (value: number | null) => (value == null ? "—" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value));

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light");
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [rawText, setRawText] = useState("");
  const [status, setStatus] = useState("Ready for a receipt photo");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [cameraState, setCameraState] = useState<"checking" | "ready" | "unsupported" | "denied">("checking");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let storedTheme: string | null = null;
    try {
      storedTheme = window.localStorage.getItem(themeStorageKey);
    } catch {}
    const nextTheme: Theme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch {}
  }

  async function startCamera() {
    if (!navigator.mediaDevices?.getUserMedia) {
      setCameraState("unsupported");
      return;
    }
    setCameraState("checking");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
      streamRef.current?.getTracks().forEach((track) => track.stop());
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setCameraState("ready");
    } catch {
      setCameraState("denied");
    }
  }

  useEffect(() => {
    void startCamera();
    return () => streamRef.current?.getTracks().forEach((track) => track.stop());
  }, []);

  function chooseFile(nextFile: File | undefined) {
    if (!nextFile) return;
    setError(null);
    setReceipt(null);
    setFile(nextFile);
    setPreview(URL.createObjectURL(nextFile));
    setStatus("Ready to extract");
  }

  function resetScan() {
    setFile(null);
    setPreview(null);
    setReceipt(null);
    setRawText("");
    setError(null);
    setStatus("Ready for a receipt photo");
    fileInputRef.current?.form?.reset();
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    chooseFile(event.target.files?.[0]);
  }

  function onDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    chooseFile(event.dataTransfer.files?.[0]);
  }

  async function extractFile(receiptFile: File) {
    setBusy(true);
    setError(null);
    setReceipt(null);
    setStatus("Reading receipt…");
    const formData = new FormData();
    formData.append("receipt", receiptFile);
    try {
      const response = await fetch("/api/ocr", { method: "POST", body: formData });
      const payload = (await response.json()) as { receipt?: Receipt; rawText?: string; error?: string };
      if (!response.ok || !payload.receipt) throw new Error(payload.error ?? "Receipt extraction failed.");
      setReceipt(payload.receipt);
      setRawText(payload.rawText ?? "");
      setStatus("Extraction complete");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Receipt extraction failed.");
      setStatus("Could not extract receipt");
    } finally {
      setBusy(false);
    }
  }

  function extractReceipt() {
    if (file) void extractFile(file);
  }

  function captureAndExtract() {
    const video = videoRef.current;
    if (!video || video.readyState < HTMLMediaElement.HAVE_CURRENT_DATA) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d")?.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const captured = new File([blob], "camera-receipt.jpg", { type: "image/jpeg" });
      chooseFile(captured);
      void extractFile(captured);
    }, "image/jpeg", 0.92);
  }

  return (
    <main className="shell">
      <header className="topbar">
        <span className="brand"><span>TM</span> Tillmark</span>
        <div className="topbar-actions">
          <span className="mode">Server-side receipt extraction · no saved results</span>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-pressed={theme === "dark"} aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}>
            <span className="theme-icon" aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
            <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
          </button>
        </div>
      </header>
      <section className="capture-heading"><div><p className="eyebrow">Tillmark receipt capture</p><h1>Scan a receipt.</h1></div><p>Use your camera for an instant capture, or upload an existing photo.</p></section>
      <section className="workspace">
        <div className="left-column">
          <div className="camera-card">
            {cameraState === "ready" ? <><video ref={videoRef} autoPlay playsInline muted className="camera-view" /><button className="camera-button" onClick={captureAndExtract} disabled={busy}>{busy ? "Processing..." : "Capture & extract"}<span>O</span></button></> : <div className="camera-placeholder"><span className="camera-glyph">O</span><strong>{cameraState === "checking" ? "Checking for camera..." : "Camera unavailable"}</strong><small>{cameraState === "denied" ? "Allow camera access to scan directly, or upload a photo below." : "Use the upload option below on this device."}</small>{cameraState === "denied" && <button className="text-button" onClick={() => void startCamera()}>Try camera again</button>}</div>}
          </div>
          <div className="capture-divider"><span>or upload a photo</span></div>
          <label className={`dropzone ${file ? "has-file" : ""}`} onDragOver={(event) => event.preventDefault()} onDrop={onDrop}>
            <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={onFileChange} />
            {preview ? <img src={preview} alt="Selected receipt" /> : <span className="upload-glyph">＋</span>}
            <strong>{file ? file.name : "Drop a receipt photo here"}</strong>
            <small>JPG, PNG, or WebP · max 10 MB</small>
            <span className="browse">Choose a file</span>
          </label>
          <div className="status-line"><span className={`status-dot ${busy ? "busy" : ""}`} /><span>{status}</span></div>
          {error && <div className="error-box" role="alert">{error}</div>}
          <button className="primary-button" onClick={extractReceipt} disabled={!file || busy}>{busy ? "Extracting…" : "Extract receipt"}<span>→</span></button>
          <p className="privacy-note">Your image is processed for this request only and is not saved by Tillmark.</p>
        </div>
        <div className="results-panel">
          {!receipt ? <div className="empty-result"><span className="empty-index">01</span><h2>Extraction appears here.</h2><p>Merchant, date, totals, and line items will be returned together.</p></div> : <>
            <div className="result-header"><div><p className="eyebrow">Latest extraction</p><h2>{receipt.merchant ?? "Unknown merchant"}</h2><p className="result-date">{receipt.date ?? "Date not found"}</p></div><div className="result-actions"><span className="confidence-badge">{receipt.lines.length ? Math.round(receipt.lines.reduce((sum, line) => sum + line.confidence, 0) / receipt.lines.length) : 0}% average</span><button className="secondary-button" type="button" onClick={resetScan}>Scan another receipt <span aria-hidden="true">↗</span></button></div></div>
            <div className="totals"><div><span>Total</span><strong>{money(receipt.total ?? receipt.balance)}</strong></div><div><span>Subtotal</span><strong>{money(receipt.subtotal)}</strong></div><div><span>Tax</span><strong>{money(receipt.tax)}</strong></div></div>
            <div className="line-table"><div className="table-head"><span>Receipt line</span><span>Catalog description</span><span>Amount</span><span>Confidence</span></div>{receipt.lines.map((line, index) => <div className="table-row" key={`${line.rawText}-${index}`}><span className="raw-line">{line.rawText}</span><span><strong>{line.description ?? "Unmatched item"}</strong><small>{line.quantity != null ? `${line.quantity} ${line.unit ?? ""}` : "Quantity not found"}</small></span><span>{money(line.amount)}</span><span className={line.needsReview ? "review-confidence" : "good-confidence"}>{line.confidence}%</span></div>)}</div>
            <details className="raw-details"><summary>Show raw OCR text</summary><pre>{rawText || "No raw OCR text returned."}</pre></details>
          </>}
        </div>
      </section>
      <footer><span>Tillmark / Receipt OCR</span><div className="footer-meta"><a className="footer-credit" href="https://fieldday.dev" target="_blank" rel="noreferrer">Built by Field Day Labs</a><span>Results live in this browser session only</span></div></footer>
    </main>
  );
}
