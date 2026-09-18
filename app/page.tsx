"use client";

import { ChangeEvent, DragEvent, useState } from "react";

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

const money = (value: number | null) => (value == null ? "—" : new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value));

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [rawText, setRawText] = useState("");
  const [status, setStatus] = useState("Ready for a receipt photo");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  function chooseFile(nextFile: File | undefined) {
    if (!nextFile) return;
    setError(null);
    setReceipt(null);
    setFile(nextFile);
    setPreview(URL.createObjectURL(nextFile));
    setStatus("Ready to extract");
  }

  function onFileChange(event: ChangeEvent<HTMLInputElement>) {
    chooseFile(event.target.files?.[0]);
  }

  function onDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    chooseFile(event.dataTransfer.files?.[0]);
  }

  async function extractReceipt() {
    if (!file) return;
    setBusy(true);
    setError(null);
    setReceipt(null);
    setStatus("Reading receipt…");
    const formData = new FormData();
    formData.append("receipt", file);
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

  return (
    <main className="shell">
      <header className="topbar"><span className="brand"><span>TM</span> Tillmark</span><span className="mode">Server-side receipt extraction · no saved results</span></header>
      <section className="intro"><div><p className="eyebrow">Receipt intelligence</p><h1>Turn one receipt<br /><em>into usable data.</em></h1><p className="lede">Upload a receipt photo and get a structured extraction with uncertain lines clearly marked for review.</p></div></section>
      <section className="workspace">
        <div className="left-column">
          <label className={`dropzone ${file ? "has-file" : ""}`} onDragOver={(event) => event.preventDefault()} onDrop={onDrop}>
            <input type="file" accept="image/jpeg,image/png,image/webp" onChange={onFileChange} />
            {preview ? <img src={preview} alt="Selected receipt" /> : <span className="upload-glyph">＋</span>}
            <strong>{file ? file.name : "Drop a receipt photo here"}</strong>
            <small>JPG, PNG, or WebP · max 10 MB</small>
            <span className="browse">Choose a file</span>
          </label>
          <div className="status-line"><span className={`status-dot ${busy ? "busy" : ""}`} /><span>{status}</span></div>
          {error && <div className="error-box" role="alert">{error}</div>}
          <button className="primary-button" onClick={extractReceipt} disabled={!file || busy}>{busy ? "Extracting…" : "Extract receipt"}<span>→</span></button>
          <p className="privacy-note">The image is sent to the server for this request only. Results are not stored by this app.</p>
        </div>
        <div className="results-panel">
          {!receipt ? <div className="empty-result"><span className="empty-index">01</span><h2>Extraction appears here.</h2><p>Merchant, date, totals, and line items will be returned together. Low-confidence fields stay visible instead of being silently guessed.</p></div> : <>
            <div className="result-header"><div><p className="eyebrow">Latest extraction</p><h2>{receipt.merchant ?? "Unknown merchant"}</h2><p className="result-date">{receipt.date ?? "Date not found"}</p></div><span className="confidence-badge">{receipt.lines.length ? Math.round(receipt.lines.reduce((sum, line) => sum + line.confidence, 0) / receipt.lines.length) : 0}% average</span></div>
            <div className="totals"><div><span>Total</span><strong>{money(receipt.total ?? receipt.balance)}</strong></div><div><span>Subtotal</span><strong>{money(receipt.subtotal)}</strong></div><div><span>Tax</span><strong>{money(receipt.tax)}</strong></div></div>
            <div className="line-table"><div className="table-head"><span>Receipt line</span><span>Catalog description</span><span>Amount</span><span>Confidence</span></div>{receipt.lines.map((line, index) => <div className="table-row" key={`${line.rawText}-${index}`}><span className="raw-line">{line.rawText}</span><span><strong>{line.description ?? "Unmatched item"}</strong><small>{line.quantity != null ? `${line.quantity} ${line.unit ?? ""}` : "Quantity not found"}</small></span><span>{money(line.amount)}</span><span className={line.needsReview ? "review-confidence" : "good-confidence"}>{line.confidence}%</span></div>)}</div>
            {receipt.warnings.length > 0 && <div className="warning-box"><strong>Review before using</strong><span>{receipt.warnings.join(" · ")}</span></div>}
            <details className="raw-details"><summary>Show raw OCR text</summary><pre>{rawText || "No raw OCR text returned."}</pre></details>
          </>}
        </div>
      </section>
      <footer><span>Tillmark / Receipt OCR</span><span>Results live in this browser session only</span></footer>
    </main>
  );
}
<<<<<<< HEAD

=======
>>>>>>> 5c61f4c (init)
