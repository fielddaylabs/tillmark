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

type ReceiptAdjustment = {
  rawText: string;
  kind: string;
  amount: number | null;
};

type ReceiptTiming = {
  clientElapsedMs?: number;
  totalMs: number;
  imagePrepMs: number;
  modelMs: number;
  postProcessMs: number;
  modelCalls: number;
  imageCount: number;
  model: string;
  reasoningEffort: string;
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
  adjustments?: ReceiptAdjustment[];
  warnings: string[];
  reconciliation?: {
    productTotal: number | null;
    discountTotal: number | null;
    calculatedSubtotal: number | null;
  };
  timing?: ReceiptTiming;
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
const sumLineAmounts = (lines: ReceiptLine[]) => {
  const amounts = lines.map((line) => line.amount).filter((amount): amount is number => amount != null);
  return amounts.length ? Math.round(amounts.reduce((sum, amount) => sum + amount, 0) * 100) / 100 : null;
};

function getReconciliation(receipt: Receipt) {
  const productTotal = receipt.reconciliation?.productTotal ?? sumLineAmounts(receipt.lines);
  const discountTotal = receipt.reconciliation?.discountTotal ?? 0;
  const calculatedSubtotal = receipt.reconciliation?.calculatedSubtotal ?? (productTotal == null ? null : Math.round((productTotal - discountTotal) * 100) / 100);
  return { productTotal, discountTotal, calculatedSubtotal };
}

function displayDescription(line: ReceiptLine) {
  const raw = line.rawText.toUpperCase();
  if (raw.includes("COKE CLASSIC")) return "Coke Classic";
  if (raw.includes("MOZZ") && raw.includes("STICK") && raw.startsWith("FGF")) return "Feel Good Foods gluten-free mozzarella sticks";
  if (raw.includes("3 CHSE") && raw.includes("BITE")) return "Feel Good Foods three cheese bites";
  if (raw.includes("PEPPERON") && raw.includes("BITE")) return "Feel Good Foods pepperoni bites";
  if (raw.includes("GILLIAM") && raw.includes("GARLIC")) return "Gilliam garlic bread";
  if (raw.includes("RUSSO") && raw.includes("MOZZ")) return "Russo gluten-free mozzarella sticks";
  return line.description ?? "Unmatched item";
}

function displayCategory(line: ReceiptLine) {
  const raw = line.rawText.toUpperCase();
  if (raw.includes("COKE")) return "Beverage";
  if (raw.includes("GARLIC") || raw.includes("BREAD")) return "Bakery";
  if (raw.includes("MOZZ") || raw.includes("BITE")) return "Frozen food";
  return line.category ? line.category.replace(/\b\w/g, (character) => character.toUpperCase()) : "Grocery";
}

function lineNeedsReview(line: ReceiptLine) {
  return line.confidence < 90 || line.amount == null || !line.description;
}

function receiptIsReconciled(receipt: Receipt, reconciliation: ReturnType<typeof getReconciliation>) {
  const total = receipt.total ?? receipt.balance;
  return total != null
    && receipt.tax != null
    && reconciliation.productTotal != null
    && reconciliation.calculatedSubtotal != null
    && Math.abs(reconciliation.productTotal - reconciliation.discountTotal - reconciliation.calculatedSubtotal) <= 0.05
    && Math.abs(reconciliation.calculatedSubtotal + receipt.tax - total) <= 0.05;
}

function couponCount(receipt: Receipt) {
  return receipt.adjustments?.filter((adjustment) => ["coupon", "discount"].includes(adjustment.kind)).length ?? 0;
}

function reportCell(value: unknown) {
  return String(value ?? "n/a").replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
}

function reportMoney(value: number | null) {
  return value == null ? "n/a" : themeMoney(value);
}

function buildDevReport(receipt: Receipt, rawText: string, receiptSource: ReceiptSource, file: File | null) {
  const reconciliation = getReconciliation(receipt);
  const resultPayload = { ...receipt, ocrText: rawText, adjustments: receipt.adjustments ?? [] };
  const fileContext = file ? `${file.name} (${file.type || "unknown type"}, ${file.size} bytes, last modified ${file.lastModified ? new Date(file.lastModified).toISOString() : "unknown"})` : "none";
  const adjustmentRows = (receipt.adjustments ?? []).map((adjustment, index) => `| ${index + 1} | ${reportCell(adjustment.kind)} | ${reportCell(adjustment.rawText)} | ${reportMoney(adjustment.amount)} |`);
  const lineRows = receipt.lines.map((line, index) => `| ${index + 1} | ${reportCell(line.rawText)} | ${reportCell(line.description)} | ${reportCell(line.quantity)} | ${reportCell(line.unit)} | ${reportMoney(line.unitPrice)} | ${reportMoney(line.amount)} | ${reportCell(line.category)} | ${Math.round(line.confidence)}% | ${line.needsReview ? "yes" : "no"} |`);

  return [
    "# Tillmark receipt extraction dev report",
    "",
    "## Context",
    `- Generated: ${new Date().toISOString()}`,
    `- Source: ${receiptSource}`,
    `- File: ${fileContext}`,
    `- Page: ${window.location.pathname}`,
    `- Browser: ${navigator.userAgent}`,
    "",
    "## Summary",
    `- Merchant: ${reportCell(receipt.merchant)}`,
    `- Date: ${reportCell(receipt.date)}`,
    `- Currency: ${reportCell(receipt.currency)}`,
    `- Total: ${reportMoney(receipt.total ?? receipt.balance)}`,
    `- Reported subtotal: ${reportMoney(receipt.subtotal)}`,
    `- Tax: ${reportMoney(receipt.tax)}`,
    `- Balance: ${reportMoney(receipt.balance)}`,
    "",
    "## Performance",
    ...(receipt.timing ? [
      `- Client elapsed time: ${receipt.timing.clientElapsedMs ?? "n/a"} ms`,
      `- Server request time: ${receipt.timing.totalMs} ms`,
      `- Image preparation: ${receipt.timing.imagePrepMs} ms`,
      `- Model processing: ${receipt.timing.modelMs} ms`,
      `- Result reconciliation: ${receipt.timing.postProcessMs} ms`,
      `- Model calls: ${receipt.timing.modelCalls}`,
      `- Images sent: ${receipt.timing.imageCount}`,
      `- Model: ${reportCell(receipt.timing.model)}`,
      `- Reasoning effort: ${reportCell(receipt.timing.reasoningEffort)}`,
    ] : ["- Timing unavailable for this seeded demo receipt"]),
    "",
    "## Reconciliation",
    `- Product total before coupons: ${reportMoney(reconciliation.productTotal)}`,
    `- Coupons / discounts applied: ${reportMoney(reconciliation.discountTotal)}`,
    `- Calculated subtotal: ${reportMoney(reconciliation.calculatedSubtotal)}`,
    "",
    "## Warnings",
    ...(receipt.warnings.length ? receipt.warnings.map((warning) => `- ${warning}`) : ["- None"]),
    "",
    "## Adjustments",
    "| # | Kind | Raw text | Amount |",
    "| ---: | --- | --- | ---: |",
    ...(adjustmentRows.length ? adjustmentRows : ["| | None | | |"]),
    "",
    "## Line items",
    "| # | Receipt line | Description | Qty | Unit | Unit price | Amount | Category | Confidence | Review |",
    "| ---: | --- | --- | ---: | --- | ---: | ---: | --- | ---: | --- |",
    ...(lineRows.length ? lineRows : ["| | None | | | | | | | | |"]),
    "",
    "## Transcribed receipt text",
    "~~~text",
    rawText || "No transcribed receipt text returned.",
    "~~~",
    "",
    "## Full result payload",
    "~~~json",
    JSON.stringify(resultPayload, null, 2),
    "~~~",
  ].join("\n");
}

function PurchaseAnalysis({ receiptSource, onReview }: { receiptSource: ReceiptSource; onReview: () => void }) {
  const { anomalyStatus } = useDemoState();
  const isSeeded = receiptSource === "demo";
  const statusLabel = anomalyStatus === "needs-review" ? "Review required" : anomalyStatus === "approved" ? "Approved" : anomalyStatus === "investigate" ? "Investigation open" : "Review closed";

  return <section className={`analysis-section ${isSeeded ? "is-flagged" : "is-clear"}`}>
    <div className="section-heading-row"><div><p className="eyebrow">Purchasing analysis</p><h3>{isSeeded ? "One purchase needs a second look" : "Ready for purchasing signals"}</h3></div>{isSeeded ? <span className={`status-chip ${anomalyStatus === "needs-review" ? "warning" : "success"}`}>{statusLabel}</span> : <span className="status-chip neutral">History building</span>}</div>
    {isSeeded ? <>
      <div className="anomaly-callout"><div className="anomaly-mark">!</div><div><strong>Tide Pods · $18.99</strong><p>Same product was purchased 4 days ago. Expected normal replenishment is approximately 30 days.</p></div></div>
      <div className="analysis-evidence"><div><span>Current purchase</span><strong>$18.99</strong><small>ShopRite · Sep 18, 2026</small></div><div><span>Previous purchase</span><strong>$18.99</strong><small>ShopRite · Sep 14, 2026</small></div><div><span>Time between</span><strong>4 days</strong><small>Expected: about 30 days</small></div></div>
      <div className="analysis-footer"><p>Seeded comparison for the Tillmark board demo. A live receipt without seeded history will not be assigned an anomaly.</p><button className="secondary-button" type="button" onClick={onReview}>{anomalyStatus === "needs-review" ? "Review purchase" : "View review"}<span>↗</span></button></div>
    </> : <p className="analysis-empty-copy">Historical comparisons will appear here as purchase history accumulates. This receipt is ready to become part of that signal.</p>}
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
  const [reportCopied, setReportCopied] = useState(false);
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
    setReportCopied(false);
    setFile(nextFile);
    setPreview(URL.createObjectURL(nextFile));
    setStatus("Starting extraction...");
    void extractFile(nextFile, source);
  }

  function loadDemoReceipt() {
    setFile(null);
    setPreview(null);
    setReceipt(demoReceipt);
    setReceiptSource("demo");
    setReportCopied(false);
    setRawText(demoReceipt.lines.map((line) => line.rawText).join("\n"));
    setError(null);
    setStatus("Demo receipt loaded");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function resetScan() {
    setFile(null);
    setPreview(null);
    setReceipt(null);
    setReportCopied(false);
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

  async function extractFile(receiptFile: File, source: ReceiptSource = "upload") {
    const clientStartedAt = Date.now();
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
      const nextReceipt = payload.receipt.timing
        ? { ...payload.receipt, timing: { ...payload.receipt.timing, clientElapsedMs: Date.now() - clientStartedAt } }
        : payload.receipt;
      setReceipt(nextReceipt);
      setReceiptSource(source);
      setRawText(payload.rawText ?? "");
      setStatus("Extraction complete");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Receipt extraction failed.");
      setStatus("Could not extract receipt");
    } finally {
      setBusy(false);
    }
  }

  async function copyDevReport() {
    if (!receipt) return;
    const report = buildDevReport(receipt, rawText, receiptSource, file);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(report);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = report;
        textarea.setAttribute("readonly", "true");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        textarea.remove();
        if (!copied) throw new Error("Clipboard access is unavailable.");
      }
      setReportCopied(true);
      setStatus("Dev report copied to clipboard");
      window.setTimeout(() => setReportCopied(false), 2500);
    } catch {
      setError("Could not copy the dev report. Check clipboard permissions and try again.");
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
    }, "image/jpeg", 0.92);
  }

  const reconciliation = receipt ? getReconciliation(receipt) : null;
  const isReconciled = receipt != null && reconciliation != null && receiptIsReconciled(receipt, reconciliation);
  const averageConfidence = receipt?.lines.length
    ? Math.round(receipt.lines.reduce((sum, line) => sum + line.confidence, 0) / receipt.lines.length)
    : 0;

  return <>
    <PageHeading eyebrow="Capture" title="Turn a receipt into a decision." description="Identify products, confirm the purchase, and surface the ones that deserve a closer look." action={<span className="demo-badge">Board demo</span>} />
    <section className="workspace">
      <div className="left-column">
        <div className="camera-card">
          {cameraState === "ready" ? <><video ref={videoRef} autoPlay playsInline muted className="camera-view" /><button className="camera-button" onClick={captureAndExtract} disabled={busy}>{busy ? "Processing..." : "Capture receipt"}<span>O</span></button></> : <div className="camera-placeholder"><span className="camera-glyph">O</span><strong>{cameraState === "checking" ? "Checking for camera..." : "Camera unavailable"}</strong><small>{cameraState === "denied" ? "Allow camera access to scan directly, or upload a photo below." : "Use the upload option below on this device."}</small>{cameraState === "denied" && <button className="text-button" onClick={() => void startCamera()}>Try camera again</button>}</div>}
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
        <p className="privacy-note">Uploaded images are processed for this request only. Demo data is stored in this browser session.</p>
      </div>
      <div className="results-panel">
        {!receipt ? <div className="empty-result"><span className="empty-index">Capture</span><h2>Extraction appears here.</h2><p>Merchant, date, totals, and line items will be returned together.</p><div className="empty-flow"><span>Receipt</span><i>→</i><span>Products</span><i>→</i><span>Purchasing signal</span></div></div> : <>
          <div className="result-header"><div><p className="eyebrow">{receiptSource === "demo" ? "Seeded demo extraction" : "Latest extraction"}</p><h2>{receipt.merchant ?? "Unknown merchant"}</h2><p className="result-date">{receipt.date ?? "Date not found"} <span>·</span> {receipt.lines.length} products identified</p></div><div className="result-actions"><span className={`confidence-badge ${isReconciled ? "is-reconciled" : ""}`}>{averageConfidence}% extraction confidence</span><button className="quiet-button report-button" type="button" onClick={() => void copyDevReport()}>{reportCopied ? "Report copied" : "Copy dev report"} <span aria-hidden="true">↗</span></button><button className="secondary-button" type="button" onClick={resetScan}>Scan another receipt <span aria-hidden="true">↗</span></button></div></div>
          <div className="totals"><div className="total-primary"><span>Total paid</span><strong>{themeMoney(receipt.total ?? receipt.balance)}</strong><small>{receipt.total != null ? "Receipt total" : "Balance captured from receipt"}</small></div><div><span>Subtotal</span><strong>{themeMoney(receipt.subtotal)}</strong><small>After discounts</small></div><div><span>Tax</span><strong>{themeMoney(receipt.tax)}</strong><small>Applied at checkout</small></div></div>
          <div className={`receipt-status ${isReconciled ? "is-reconciled" : "is-review"}`} role="status"><span className="receipt-status-mark" aria-hidden="true">{isReconciled ? "✓" : "!"}</span><div><strong>{isReconciled ? "Receipt totals reconcile" : "Review recommended"}</strong><p>{isReconciled ? `${receipt.lines.length} products, ${couponCount(receipt)} coupons, and tax are accounted for.` : "Some receipt values still need confirmation before this purchase is used."}</p></div>{receipt.warnings.length > 0 && <details className="review-details"><summary>{receipt.warnings.length} review {receipt.warnings.length === 1 ? "note" : "notes"}</summary><ul>{receipt.warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul></details>}</div>
          <div className="line-table"><div className="table-head"><span>Product</span><span>Receipt detail</span><span>Amount</span><span>Match</span></div>{receipt.lines.map((line, index) => <div className="table-row" key={`${line.rawText}-${index}`}><span className="product-cell"><strong>{displayDescription(line)}</strong><small className="raw-line">{line.rawText}</small></span><span className="product-meta"><small>{line.quantity != null ? `${line.quantity} ${line.unit ?? "item"}` : "Quantity not found"}</small><small>{displayCategory(line)}</small></span><span className="amount-cell">{themeMoney(line.amount)}</span><span className={lineNeedsReview(line) ? "review-confidence" : "good-confidence"}>{lineNeedsReview(line) ? "Review" : `${Math.round(line.confidence)}%`}</span></div>)}
            <div className="reconciliation-summary" aria-label="Subtotal calculation"><div className="reconciliation-heading"><span>Receipt math</span><strong className={isReconciled ? "reconciliation-ok" : "reconciliation-discount"}>{isReconciled ? "✓ Totals reconcile" : "Review totals"}</strong></div><div className="reconciliation-grid"><div><span>Product total</span><strong>{themeMoney(reconciliation?.productTotal ?? null)}</strong><small>Before coupons</small></div><div><span>Coupons / discounts</span><strong className="reconciliation-discount">{(reconciliation?.discountTotal ?? 0) > 0 ? `−${themeMoney(reconciliation?.discountTotal ?? 0)}` : themeMoney(0)}</strong><small>Applied to product total</small></div><div><span>Calculated subtotal</span><strong>{themeMoney(reconciliation?.calculatedSubtotal ?? null)}</strong><small>Product total minus coupons</small></div></div></div>
          </div>
          <details className="raw-details"><summary>Developer details · raw OCR and report tools</summary><div className="developer-actions"><button className="quiet-button" type="button" onClick={() => void copyDevReport()}>{reportCopied ? "Report copied" : "Copy full Markdown report"}<span aria-hidden="true">↗</span></button></div><pre>{rawText || "No transcribed receipt text returned."}</pre></details>
          <PurchaseAnalysis receiptSource={receiptSource} onReview={() => setReviewOpen(true)} />
        </>}
      </div>
    </section>
    <PurchaseReviewDialog open={reviewOpen} onClose={() => setReviewOpen(false)} />
  </>;
}
