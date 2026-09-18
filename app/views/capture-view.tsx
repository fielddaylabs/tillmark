"use client";

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import { useDemoState } from "../components/demo-context";
import { PurchaseReviewDialog } from "../components/purchase-review-dialog";
import { PageHeading } from "./page-heading";

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

type ReceiptSource = "demo" | "upload" | "camera";

const demoReceipt: Receipt = {
  merchant: "ShopRite",
  date: "Sep 18, 2026",
  currency: "USD",
  subtotal: 55.61,
  tax: 3.68,
  total: 59.29,
  balance: 59.29,
  lines: [
    { rawText: "TIDE PODS SPRING MEADOW 42 CT", description: "Tide Pods Spring Meadow, 42 ct", quantity: 1, unit: "each", unitPrice: 18.99, amount: 18.99, category: "Cleaning", confidence: 99, needsReview: false },
    { rawText: "BONELESS CHICKEN BREAST", description: "Boneless chicken breast", quantity: 2.14, unit: "lb", unitPrice: 5.49, amount: 11.75, category: "Protein", confidence: 96, needsReview: false },
    { rawText: "ROMAINE HEARTS 3 PK", description: "Romaine hearts, 3 pack", quantity: 1, unit: "each", unitPrice: 3.99, amount: 3.99, category: "Produce", confidence: 98, needsReview: false },
    { rawText: "WHOLE MILK 1 GAL", description: "Whole milk, 1 gallon", quantity: 1, unit: "each", unitPrice: 4.29, amount: 4.29, category: "Dairy", confidence: 98, needsReview: false },
    { rawText: "MILD MARINARA SAUCE", description: "Mild marinara sauce", quantity: 2, unit: "each", unitPrice: 3.29, amount: 6.58, category: "Pantry", confidence: 95, needsReview: false },
    { rawText: "SHREDDED MOZZARELLA 16 OZ", description: "Shredded mozzarella, 16 oz", quantity: 1, unit: "each", unitPrice: 5.99, amount: 5.99, category: "Dairy", confidence: 97, needsReview: false },
    { rawText: "ITALIAN BREAD", description: "Italian bread", quantity: 1, unit: "each", unitPrice: 4.02, amount: 4.02, category: "Bakery", confidence: 93, needsReview: false },
  ],
  warnings: [],
};

const themeMoney = (value: number | null) => value == null ? "n/a" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);

function PurchaseAnalysis({ receiptSource, onReview }: { receiptSource: ReceiptSource; onReview: () => void }) {
  const { anomalyStatus } = useDemoState();
  const isSeeded = receiptSource === "demo";
  const statusLabel = anomalyStatus === "needs-review" ? "Review required" : anomalyStatus === "approved" ? "Approved" : anomalyStatus === "investigate" ? "Investigation open" : "Review closed";

  return <section className={`analysis-section ${isSeeded ? "is-flagged" : "is-clear"}`}>
    <div className="section-heading-row"><div><p className="eyebrow">Purchasing analysis</p><h3>{isSeeded ? "One purchase needs a second look" : "No seeded anomaly found"}</h3></div>{isSeeded ? <span className={`status-chip ${anomalyStatus === "needs-review" ? "warning" : "success"}`}>{statusLabel}</span> : <span className="status-chip neutral">No comparison</span>}</div>
    {isSeeded ? <>
      <div className="anomaly-callout"><div className="anomaly-mark">!</div><div><strong>Tide Pods · $18.99</strong><p>Same product was purchased 4 days ago. Expected normal replenishment is approximately 30 days.</p></div></div>
      <div className="analysis-evidence"><div><span>Current purchase</span><strong>$18.99</strong><small>ShopRite · Sep 18, 2026</small></div><div><span>Previous purchase</span><strong>$18.99</strong><small>ShopRite · Sep 14, 2026</small></div><div><span>Time between</span><strong>4 days</strong><small>Expected: about 30 days</small></div></div>
      <div className="analysis-footer"><p>Seeded comparison for the Tillmark board demo. A live receipt without seeded history will not be assigned an anomaly.</p><button className="secondary-button" type="button" onClick={onReview}>{anomalyStatus === "needs-review" ? "Review purchase" : "View review"}<span>↗</span></button></div>
    </> : <p className="analysis-empty-copy">Tillmark found no seeded purchasing comparison for this receipt. New historical matches would appear here as data accumulates.</p>}
  </section>;
}

export default function CaptureView() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [receiptSource, setReceiptSource] = useState<ReceiptSource>("upload");
  const [rawText, setRawText] = useState("");
  const [status, setStatus] = useState("Ready for a receipt photo");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [cameraState, setCameraState] = useState<"checking" | "ready" | "unsupported" | "denied">("checking");
  const [reviewOpen, setReviewOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!preview) return;
    return () => URL.revokeObjectURL(preview);
  }, [preview]);

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

  function chooseFile(nextFile: File | undefined, source: ReceiptSource = "upload") {
    if (!nextFile) return;
    setError(null);
    setReceipt(null);
    setReceiptSource(source);
    setFile(nextFile);
    setPreview(URL.createObjectURL(nextFile));
    setStatus("Ready to extract");
  }

  function loadDemoReceipt() {
    setFile(null);
    setPreview(null);
    setReceipt(demoReceipt);
    setReceiptSource("demo");
    setRawText(demoReceipt.lines.map((line) => line.rawText).join("\n"));
    setError(null);
    setStatus("Demo receipt loaded");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function resetScan() {
    setFile(null);
    setPreview(null);
    setReceipt(null);
    setRawText("");
    setError(null);
    setReceiptSource("upload");
    setStatus("Ready for a receipt photo");
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
    setStatus("Reading receipt...");
    const formData = new FormData();
    formData.append("receipt", receiptFile);
    try {
      const response = await fetch("/api/ocr", { method: "POST", body: formData });
      const payload = (await response.json()) as { receipt?: Receipt; rawText?: string; error?: string };
      if (!response.ok || !payload.receipt) throw new Error(payload.error ?? "Receipt extraction failed.");
      setReceipt(payload.receipt);
      setReceiptSource("upload");
      setRawText(payload.rawText ?? "");
      setStatus("Extraction complete");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Receipt extraction failed.");
      setStatus("Could not extract receipt");
    } finally {
      setBusy(false);
    }
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
      chooseFile(captured, "camera");
      void extractFile(captured);
    }, "image/jpeg", 0.92);
  }

  return <>
    <PageHeading eyebrow="Capture" title="Turn a receipt into a decision." description="Identify products, confirm the purchase, and surface the ones that deserve a closer look." action={<span className="demo-badge">Board demo</span>} />
    <section className="workspace">
      <div className="left-column">
        <div className="camera-card">
          {cameraState === "ready" ? <><video ref={videoRef} autoPlay playsInline muted className="camera-view" /><button className="camera-button" onClick={captureAndExtract} disabled={busy}>{busy ? "Processing..." : "Capture and extract"}<span>O</span></button></> : <div className="camera-placeholder"><span className="camera-glyph">O</span><strong>{cameraState === "checking" ? "Checking for camera..." : "Camera unavailable"}</strong><small>{cameraState === "denied" ? "Allow camera access to scan directly, or upload a photo below." : "Use the upload option below on this device."}</small>{cameraState === "denied" && <button className="text-button" onClick={() => void startCamera()}>Try camera again</button>}</div>}
        </div>
        <div className="capture-divider"><span>or upload a photo</span></div>
        <label className={`dropzone ${file ? "has-file" : ""}`} onDragOver={(event) => event.preventDefault()} onDrop={onDrop}>
          <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp" onChange={onFileChange} />
          {preview ? <img src={preview} alt="Selected receipt" /> : <span className="upload-glyph">＋</span>}
          <strong>{file ? file.name : "Drop a receipt photo here"}</strong>
          <small>JPG, PNG, or WebP · max 10 MB</small>
          <span className="browse">Choose a file</span>
        </label>
        <button className="demo-load-button" type="button" onClick={loadDemoReceipt}><span>Load demo receipt</span><small>ShopRite · includes Tide Pods anomaly</small><span>↗</span></button>
        <div className="status-line"><span className={`status-dot ${busy ? "busy" : ""}`} /><span>{status}</span></div>
        {error && <div className="error-box" role="alert">{error}</div>}
        <button className="primary-button" onClick={() => file && void extractFile(file)} disabled={!file || busy}>{busy ? "Extracting..." : "Extract receipt"}<span>→</span></button>
        <p className="privacy-note">Uploaded images are processed for this request only. Demo data is stored in this browser session.</p>
      </div>
      <div className="results-panel">
        {!receipt ? <div className="empty-result"><span className="empty-index">Capture</span><h2>Extraction appears here.</h2><p>Merchant, date, totals, and line items will be returned together.</p><div className="empty-flow"><span>Receipt</span><i>→</i><span>Products</span><i>→</i><span>Purchasing signal</span></div></div> : <>
          <div className="result-header"><div><p className="eyebrow">{receiptSource === "demo" ? "Seeded demo extraction" : "Latest extraction"}</p><h2>{receipt.merchant ?? "Unknown merchant"}</h2><p className="result-date">{receipt.date ?? "Date not found"}</p></div><div className="result-actions"><span className="confidence-badge">{receipt.lines.length ? Math.round(receipt.lines.reduce((sum, line) => sum + line.confidence, 0) / receipt.lines.length) : 0}% average</span><button className="secondary-button" type="button" onClick={resetScan}>Scan another receipt <span aria-hidden="true">↗</span></button></div></div>
          <div className="totals"><div><span>Total</span><strong>{themeMoney(receipt.total ?? receipt.balance)}</strong></div><div><span>Subtotal</span><strong>{themeMoney(receipt.subtotal)}</strong></div><div><span>Tax</span><strong>{themeMoney(receipt.tax)}</strong></div></div>
          <div className="line-table"><div className="table-head"><span>Receipt line</span><span>Catalog description</span><span>Amount</span><span>Confidence</span></div>{receipt.lines.map((line, index) => <div className="table-row" key={`${line.rawText}-${index}`}><span className="raw-line">{line.rawText}</span><span><strong>{line.description ?? "Unmatched item"}</strong><small>{line.quantity != null ? `${line.quantity} ${line.unit ?? ""}` : "Quantity not found"}</small></span><span>{themeMoney(line.amount)}</span><span className={line.needsReview ? "review-confidence" : "good-confidence"}>{line.confidence}%</span></div>)}</div>
          <details className="raw-details"><summary>Show raw OCR text</summary><pre>{rawText || "No raw OCR text returned."}</pre></details>
          <PurchaseAnalysis receiptSource={receiptSource} onReview={() => setReviewOpen(true)} />
        </>}
      </div>
    </section>
    <PurchaseReviewDialog open={reviewOpen} onClose={() => setReviewOpen(false)} />
  </>;
}
