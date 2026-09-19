"use client";

import { ChangeEvent, DragEvent, useEffect, useRef, useState } from "react";
import { benchmarkGroceryCatalog, catalogifyReceiptLines, findCatalogItem, groceryCategories, matchCatalogItem, suggestCatalogItemFromLine, GroceryCatalogItem } from "../data/grocery-catalog";
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
  scanMode: "fast" | "refine";
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
    bagFee?: number | null;
  };
  timing?: ReceiptTiming;
};

type ReceiptSource = "demo" | "upload" | "camera";
type ScanPhase = "idle" | "scanning" | "refining" | "complete";

type LineEdit = {
  catalogId?: string | null;
  quantity?: string;
  unit?: string;
  category?: string;
  manual?: boolean;
};

type ReviewLine = {
  item: GroceryCatalogItem | null;
  title: string;
  quantity: string;
  unit: string;
  category: string;
  manual: boolean;
  needsReview: boolean;
};

const demoReceipt: Receipt = {
  merchant: "ShopRite",
  date: "Sep 18, 2026",
  currency: "USD",
  subtotal: 24.49,
  tax: 0,
  total: 24.49,
  balance: 24.49,
  lines: [
    { rawText: "GOYA LENTILS 2.19 *", description: "Lentils", quantity: 1, unit: "package", unitPrice: 2.19, amount: 2.19, category: "Pantry", confidence: 98, needsReview: false },
    { rawText: "GOYA BLACK BEANS / 2 @ 0.79 1.58 *", description: "Beans", quantity: 2, unit: "package", unitPrice: 0.79, amount: 1.58, category: "Pantry", confidence: 98, needsReview: false },
    { rawText: "8PK/7.5OZ CN COKE / 1 @ 3 FOR 10.00 3.34 A *", description: "Coke Cans", quantity: 1, unit: "pack of 8 cans", unitPrice: 3.34, amount: 3.34, category: "Beverage", confidence: 96, needsReview: false },
    { rawText: "4PK CN CITZ DRY C ID 13.99 A", description: null, quantity: 1, unit: null, unitPrice: 13.99, amount: 13.99, category: "Grocery", confidence: 78, needsReview: true },
    { rawText: "BOTTLE DEPOSIT 0.40 *", description: "Bottle Deposit", quantity: 1, unit: null, unitPrice: 0.4, amount: 0.4, category: "Miscellaneous", confidence: 98, needsReview: false },
    { rawText: "ORG GRAPE TOMATOES 2.99 *", description: "Organic Grape Tomatoes", quantity: 1, unit: "package", unitPrice: 2.99, amount: 2.99, category: "Produce", confidence: 94, needsReview: false },
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
  const bagFee = receipt.reconciliation?.bagFee ?? 0;
  return { productTotal, discountTotal, calculatedSubtotal, bagFee };
}

function displayDescription(line: ReceiptLine) {
  const raw = line.rawText.toUpperCase();
  if (raw.includes("COKE CLASSIC")) return "Coke Classic";
  if (raw.includes("MOZZ") && raw.includes("STICK") && raw.startsWith("FGF")) return "Feel Good Foods gluten-free mozzarella sticks";
  if (raw.includes("3 CHSE") && raw.includes("BITE")) return "Feel Good Foods three cheese bites";
  if (raw.includes("PEPPERON") && raw.includes("BITE")) return "Feel Good Foods pepperoni bites";
  if (raw.includes("GARLIC") && raw.includes("BRE")) return "Gilliam garlic bread";
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

function getReviewLine(line: ReceiptLine, index: number, edits: Record<number, LineEdit>, catalogItems: readonly GroceryCatalogItem[]): ReviewLine {
  const edit = edits[index];
  const hasCatalogOverride = edit && Object.prototype.hasOwnProperty.call(edit, "catalogId");
  const item = hasCatalogOverride ? findCatalogItem(edit.catalogId, catalogItems) : matchCatalogItem(line.rawText, line.description, catalogItems);
  const fallbackCategory = displayCategory(line);
  return {
    item,
    title: item?.name ?? "Unidentified item",
    quantity: edit?.quantity ?? (line.quantity != null ? String(line.quantity) : item ? "1" : ""),
    unit: edit?.unit ?? line.unit ?? item?.defaultUnit ?? "",
    category: edit?.category ?? item?.category ?? fallbackCategory,
    manual: edit?.manual === true,
    needsReview: !item || lineNeedsReview(line),
  };
}

function catalogifyReceipt(receipt: Receipt, catalogItems: readonly GroceryCatalogItem[]): Receipt {
  const adjustments = receipt.adjustments ?? [];
  const hasDepositLine = receipt.lines.some((line) => matchCatalogItem(line.rawText, line.description, catalogItems)?.id === "bottle-deposit");
  const depositAdjustments = hasDepositLine ? [] : adjustments.filter((adjustment) => /bottle\s*deposit|btl\/can\s*deposit/i.test(adjustment.rawText));
  const promotedDepositLines: ReceiptLine[] = depositAdjustments.map((adjustment) => ({
    rawText: adjustment.rawText,
    description: "Bottle Deposit",
    quantity: adjustment.amount == null ? null : 1,
    unit: null,
    unitPrice: adjustment.amount,
    amount: adjustment.amount,
    category: "Miscellaneous",
    confidence: 100,
    needsReview: adjustment.amount == null,
  }));

  return {
    ...receipt,
    lines: catalogifyReceiptLines([...receipt.lines, ...promotedDepositLines], catalogItems),
    adjustments: depositAdjustments.length ? adjustments.filter((adjustment) => !depositAdjustments.includes(adjustment)) : receipt.adjustments,
  };
}

function shouldRefineReceipt(receipt: Receipt) {
  const averageConfidence = receipt.lines.length
    ? receipt.lines.reduce((sum, line) => sum + line.confidence, 0) / receipt.lines.length
    : 0;
  const hasLowConfidenceLine = receipt.lines.some((line) => line.confidence < 90);
  return averageConfidence < 90 || hasLowConfidenceLine;
}

function receiptIsReconciled(receipt: Receipt, reconciliation: ReturnType<typeof getReconciliation>) {
  const total = receipt.total ?? receipt.balance;
  return total != null
    && receipt.tax != null
    && reconciliation.productTotal != null
    && reconciliation.calculatedSubtotal != null
    && Math.abs(reconciliation.productTotal - reconciliation.discountTotal + reconciliation.bagFee - reconciliation.calculatedSubtotal) <= 0.05
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

const maxUploadBytes = 3.5 * 1024 * 1024;
const customCatalogStorageKey = "tillmark-custom-grocery-catalog";

function isCatalogItem(value: unknown): value is GroceryCatalogItem {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<GroceryCatalogItem>;
  return typeof candidate.id === "string"
    && typeof candidate.name === "string"
    && typeof candidate.category === "string"
    && typeof candidate.defaultUnit === "string"
    && Array.isArray(candidate.units)
    && candidate.units.every((unit) => typeof unit === "string")
    && Array.isArray(candidate.aliases)
    && candidate.aliases.every((alias) => typeof alias === "string");
}

function customCatalogItems(catalogItems: readonly GroceryCatalogItem[]) {
  const benchmarkIds = new Set(benchmarkGroceryCatalog.map((catalogItem) => catalogItem.id));
  return catalogItems.filter((catalogItem) => !benchmarkIds.has(catalogItem.id));
}

function persistCustomCatalog(catalogItems: readonly GroceryCatalogItem[]) {
  try {
    window.localStorage.setItem(customCatalogStorageKey, JSON.stringify(customCatalogItems(catalogItems)));
  } catch {
    // The catalog still works for this page when browser storage is unavailable.
  }
}

function canvasToJpeg(canvas: HTMLCanvasElement, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("The receipt image could not be prepared."));
    }, "image/jpeg", quality);
  });
}

async function prepareReceiptUpload(file: File) {
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.decoding = "async";
    await new Promise<void>((resolve, reject) => {
      image.onload = () => resolve();
      image.onerror = () => reject(new Error("The receipt image could not be opened."));
      image.src = objectUrl;
    });

    const sourceWidth = image.naturalWidth;
    const sourceHeight = image.naturalHeight;
    const sourceMaxDimension = Math.max(sourceWidth, sourceHeight);
    if (file.size <= maxUploadBytes && sourceMaxDimension <= 2200 && file.type === "image/jpeg") return file;

    const scale = Math.min(1, 2200 / sourceMaxDimension);
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(sourceWidth * scale));
    canvas.height = Math.max(1, Math.round(sourceHeight * scale));
    canvas.getContext("2d")?.drawImage(image, 0, 0, canvas.width, canvas.height);

    let quality = 0.84;
    let blob = await canvasToJpeg(canvas, quality);
    while (blob.size > maxUploadBytes && quality > 0.58) {
      quality -= 0.08;
      blob = await canvasToJpeg(canvas, quality);
    }

    const baseName = file.name.replace(/\.[^.]+$/, "") || "receipt";
    return new File([blob], `${baseName}.jpg`, { type: "image/jpeg", lastModified: file.lastModified });
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
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
    `- Assumed paper bag fees: ${reportMoney(reconciliation.bagFee)}`,
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

function PurchaseAnalysis({ receiptSource, catalogItems, unidentifiedCount }: { receiptSource: ReceiptSource; catalogItems: readonly GroceryCatalogItem[]; unidentifiedCount: number }) {
  const isCatalogDemo = receiptSource === "demo";

  return <section className="analysis-section is-clear">
    <div className="section-heading-row"><div><p className="eyebrow">Purchasing analysis</p><h3>{isCatalogDemo ? "Benchmark catalog is active" : "Ready for purchasing signals"}</h3></div><span className={`status-chip ${isCatalogDemo ? "success" : "neutral"}`}>{isCatalogDemo ? "Catalog ready" : "History building"}</span></div>
    {isCatalogDemo ? <>
      <div className="catalog-callout"><div className="anomaly-mark">✓</div><div><strong>Brand-free item matching is on</strong><p>{unidentifiedCount > 0 ? `${unidentifiedCount} line${unidentifiedCount === 1 ? " remains" : "s remain"} unidentified until you choose or create an item option.` : "Every line has a saved catalog option. New options will be available on future receipts."}</p></div></div>
      <div className="analysis-evidence"><div><span>Catalog items</span><strong>{catalogItems.length}</strong><small>Brand-free options available</small></div><div><span>Editable units</span><strong>Per line</strong><small>Package, oz, lb, cans, and more</small></div><div><span>Manual review</span><strong>{unidentifiedCount} line{unidentifiedCount === 1 ? "" : "s"}</strong><small>{unidentifiedCount > 0 ? "Unidentified until confirmed" : "All lines have a saved option"}</small></div></div>
      <div className="analysis-footer"><p>Choosing an item, quantity, unit, or category records a manual edit for that line.</p></div>
    </> : <p className="analysis-empty-copy">Historical comparisons will appear here as purchase history accumulates. This receipt is ready to become part of that signal.</p>}
  </section>;
}

export default function CaptureView() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<Receipt | null>(null);
  const [catalogItems, setCatalogItems] = useState<GroceryCatalogItem[]>(benchmarkGroceryCatalog);
  const [lineEdits, setLineEdits] = useState<Record<number, LineEdit>>({});
  const [receiptSource, setReceiptSource] = useState<ReceiptSource>("upload");
  const [rawText, setRawText] = useState("");
  const [status, setStatus] = useState("Ready for a receipt photo");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [scanPhase, setScanPhase] = useState<ScanPhase>("idle");
  const [refining, setRefining] = useState(false);
  const [reportCopied, setReportCopied] = useState(false);
  const [cameraState, setCameraState] = useState<"checking" | "ready" | "unsupported" | "denied">("checking");
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const scanRequestRef = useRef(0);

  useEffect(() => {
    if (!preview) return;
    return () => URL.revokeObjectURL(preview);
  }, [preview]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(customCatalogStorageKey);
      if (!stored) return;
      const saved = JSON.parse(stored) as unknown;
      if (!Array.isArray(saved)) return;
      const customItems = saved.filter(isCatalogItem).filter((catalogItem) => !benchmarkGroceryCatalog.some((benchmarkItem) => benchmarkItem.id === catalogItem.id));
      setCatalogItems([...benchmarkGroceryCatalog, ...customItems]);
    } catch {
      // The benchmark catalog remains available when saved catalog data is invalid.
    }
  }, []);

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
    const requestId = ++scanRequestRef.current;
    setError(null);
    setReceipt(null);
    setLineEdits({});
    setRefining(false);
    setScanPhase("scanning");
    setReceiptSource(source);
    setReportCopied(false);
    setFile(nextFile);
    setPreview(URL.createObjectURL(nextFile));
    setStatus("Starting fast scan...");
    void extractFile(nextFile, source, requestId);
  }

  function loadDemoReceipt() {
    scanRequestRef.current += 1;
    setBusy(false);
    setFile(null);
    setPreview(null);
    setReceipt(catalogifyReceipt(demoReceipt, catalogItems));
    setLineEdits({});
    setRefining(false);
    setScanPhase("complete");
    setReceiptSource("demo");
    setReportCopied(false);
    setRawText(demoReceipt.lines.map((line) => line.rawText).join("\n"));
    setError(null);
    setStatus("Demo receipt loaded");
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function resetScan() {
    scanRequestRef.current += 1;
    setFile(null);
    setPreview(null);
    setReceipt(null);
    setLineEdits({});
    setBusy(false);
    setRefining(false);
    setScanPhase("idle");
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

  async function extractFile(receiptFile: File, source: ReceiptSource, requestId: number) {
    setBusy(true);
    setError(null);
    setReceipt(null);

    async function requestReceipt(scanMode: "fast" | "refine") {
      const clientStartedAt = Date.now();
      const formData = new FormData();
      const uploadFile = await prepareReceiptUpload(receiptFile);
      formData.append("receipt", uploadFile);
      formData.append("scanMode", scanMode);
      const response = await fetch("/api/ocr", { method: "POST", body: formData });
      const responseText = await response.text();
      let payload: { receipt?: Receipt; rawText?: string; error?: string };
      try {
        payload = JSON.parse(responseText) as { receipt?: Receipt; rawText?: string; error?: string };
      } catch {
        if (response.status === 413 || /request entity too large|payload too large/i.test(responseText)) {
          throw new Error("This receipt image is too large to process. Try a smaller photo or crop it closer to the receipt.");
        }
        throw new Error(`Receipt extraction failed (${response.status}). Try the scan again.`);
      }
      if (!response.ok || !payload.receipt) throw new Error(payload.error ?? "Receipt extraction failed.");
      const nextReceipt = payload.receipt.timing
        ? { ...payload.receipt, timing: { ...payload.receipt.timing, clientElapsedMs: Date.now() - clientStartedAt } }
        : payload.receipt;
      return { receipt: nextReceipt, rawText: payload.rawText ?? "" };
    }

    try {
      setStatus("Reading enhanced image...");
      const firstPass = await requestReceipt("fast");
      if (requestId !== scanRequestRef.current) return;
      setReceipt(catalogifyReceipt(firstPass.receipt, catalogItems));
      setReceiptSource(source);
      setRawText(firstPass.rawText);

      if (!shouldRefineReceipt(firstPass.receipt)) {
        setScanPhase("complete");
        setStatus("Extraction complete");
        return;
      }

      setRefining(true);
      setScanPhase("refining");
      setStatus("Still improving this scan...");
      const refinedPass = await requestReceipt("refine");
      if (requestId !== scanRequestRef.current) return;
      setReceipt(catalogifyReceipt(refinedPass.receipt, catalogItems));
      setRawText(refinedPass.rawText);
      setRefining(false);
      setScanPhase("complete");
      setStatus("Extraction complete");
    } catch (caught) {
      if (requestId !== scanRequestRef.current) return;
      setRefining(false);
      setScanPhase("idle");
      setError(caught instanceof Error ? caught.message : "Receipt extraction failed.");
      setStatus("Could not extract receipt");
    } finally {
      if (requestId === scanRequestRef.current) setBusy(false);
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

  function updateLine(index: number, patch: LineEdit) {
    setLineEdits((current) => ({
      ...current,
      [index]: { ...current[index], ...patch, manual: true },
    }));
  }

  function createCatalogItem(index: number) {
    const line = receipt?.lines[index];
    if (!line) return;
    const suggestedItem = suggestCatalogItemFromLine(line);
    if (!suggestedItem) {
      setError("The receipt line does not contain enough text to create a catalog option.");
      return;
    }

    let nextId = suggestedItem.id;
    let suffix = 2;
    while (catalogItems.some((catalogItem) => catalogItem.id === nextId)) {
      nextId = `${suggestedItem.id}-${suffix}`;
      suffix += 1;
    }
    const createdItem = { ...suggestedItem, id: nextId };
    const nextCatalogItems = [...catalogItems, createdItem];
    setCatalogItems(nextCatalogItems);
    persistCustomCatalog(nextCatalogItems);
    setLineEdits((current) => ({
      ...current,
      [index]: { ...current[index], catalogId: createdItem.id, manual: true },
    }));
    setStatus(`Saved ${createdItem.name} as a new item option`);
  }

  function chooseCatalogItem(index: number, catalogId: string) {
    if (catalogId === "__create_new_item__") {
      createCatalogItem(index);
      return;
    }
    setLineEdits((current) => ({
      ...current,
      [index]: {
        ...current[index],
        catalogId: catalogId || null,
        manual: Boolean(catalogId),
      },
    }));
  }

  const reconciliation = receipt ? getReconciliation(receipt) : null;
  const isReconciled = receipt != null && reconciliation != null && receiptIsReconciled(receipt, reconciliation);
  const unidentifiedCount = receipt?.lines.reduce((count, line, index) => count + (getReviewLine(line, index, lineEdits, catalogItems).item ? 0 : 1), 0) ?? 0;
  const averageConfidence = receipt?.lines.length
    ? Math.round(receipt.lines.reduce((sum, line) => sum + line.confidence, 0) / receipt.lines.length)
    : 0;

  return <>
    <PageHeading eyebrow="Capture" title="Turn a receipt into a decision." description="Identify products, confirm the purchase, and surface the ones that deserve a closer look." action={<span className="demo-badge">Board demo</span>} />
    <section className={`workspace ${scanPhase === "scanning" && !receipt ? "is-scanning" : ""}`}>
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
        <button className="demo-load-button" type="button" onClick={loadDemoReceipt}><span>Load catalog demo</span><small>ShopRite · benchmark item matching</small><span>↗</span></button>
        <div className="status-line"><span className={`status-dot ${busy ? "busy" : ""}`} /><span>{status}</span></div>
        {error && <div className="error-box" role="alert">{error}</div>}
        <p className="privacy-note">Uploaded images are processed for this request only. Demo data is stored in this browser session.</p>
      </div>
      <div className={`results-panel ${scanPhase === "scanning" && !receipt ? "is-scanning" : ""}`}>
        {!receipt ? scanPhase === "scanning" && preview ? <div className="scan-loading-stage" role="status" aria-live="polite">
          <div className="scan-visual">
            <img src={preview} alt="Receipt being scanned" />
            <span className="scan-frame" aria-hidden="true" />
            <span className="scan-beam" aria-hidden="true" />
            <span className="scan-corner scan-corner-top-left" aria-hidden="true" />
            <span className="scan-corner scan-corner-top-right" aria-hidden="true" />
            <span className="scan-corner scan-corner-bottom-left" aria-hidden="true" />
            <span className="scan-corner scan-corner-bottom-right" aria-hidden="true" />
          </div>
          <div className="scan-loading-copy"><span className="eyebrow">Fast pass · enhanced image</span><h2>Reading the receipt.</h2><p>Finding the merchant, totals, and first set of line items now.</p><div className="scan-progress"><i /></div><small>Results will appear as soon as the first pass is ready.</small></div>
        </div> : <div className="empty-result"><span className="empty-index">Capture</span><h2>Extraction appears here.</h2><p>Merchant, date, totals, and line items will be returned together.</p><div className="empty-flow"><span>Receipt</span><i>→</i><span>Products</span><i>→</i><span>Purchasing signal</span></div></div> : <>
          {refining && <div className="refinement-banner" role="status" aria-live="polite"><span className="refinement-mark" aria-hidden="true"><i /></span><div><strong>Still improving this scan</strong><p>The first read needs a closer look, so we’re checking the original image against the enhanced version.</p></div><span className="refinement-dots" aria-hidden="true">···</span></div>}
          <div className="result-header"><div><p className="eyebrow">{receiptSource === "demo" ? "Seeded demo extraction" : "Latest extraction"}</p><h2>{receipt.merchant ?? "Unknown merchant"}</h2><p className="result-date">{receipt.date ?? "Date not found"} <span>·</span> {receipt.lines.length} products identified</p></div><div className="result-actions"><span className={`confidence-badge ${isReconciled ? "is-reconciled" : ""}`}>{averageConfidence}% extraction confidence</span><button className="quiet-button report-button" type="button" onClick={() => void copyDevReport()}>{reportCopied ? "Report copied" : "Copy dev report"} <span aria-hidden="true">↗</span></button><button className="secondary-button" type="button" onClick={resetScan} disabled={busy}>Scan another receipt <span aria-hidden="true">↗</span></button></div></div>
          <div className="totals"><div className="total-primary"><span>Total paid</span><strong>{themeMoney(receipt.total ?? receipt.balance)}</strong><small>{receipt.total != null ? "Receipt total" : "Balance captured from receipt"}</small></div><div><span>Subtotal</span><strong>{themeMoney(receipt.subtotal)}</strong><small>After discounts</small></div><div><span>Tax</span><strong>{themeMoney(receipt.tax)}</strong><small>Applied at checkout</small></div></div>
          <div className={`receipt-status ${isReconciled ? "is-reconciled" : "is-review"}`} role="status"><span className="receipt-status-mark" aria-hidden="true">{isReconciled ? "✓" : "!"}</span><div><strong>{isReconciled ? "Receipt totals reconcile" : "Review recommended"}</strong><p>{isReconciled ? `${receipt.lines.length} products, ${couponCount(receipt)} coupons, and tax are accounted for.` : "Some receipt values still need confirmation before this purchase is used."}</p></div>{receipt.warnings.length > 0 && <details className="review-details"><summary>{receipt.warnings.length} review {receipt.warnings.length === 1 ? "note" : "notes"}</summary><ul>{receipt.warnings.map((warning) => <li key={warning}>{warning}</li>)}</ul></details>}</div>
          <div className="line-table"><div className="table-head"><span>Product</span><span>Amount bought</span><span>Receipt amount</span><span>Review</span></div>{receipt.lines.map((line, index) => {
            const reviewLine = getReviewLine(line, index, lineEdits, catalogItems);
            const selectedUnitList = reviewLine.item ? `unit-options-${index}` : undefined;
            const suggestedCatalogItem = !reviewLine.item ? suggestCatalogItemFromLine(line) : null;
            const matchLabel = reviewLine.manual ? "Manual" : reviewLine.needsReview ? "Review" : `${Math.round(line.confidence)}%`;
            const matchClass = reviewLine.manual || !reviewLine.needsReview ? "good-confidence" : "review-confidence";
            return <div className="table-row" key={`${line.rawText}-${index}`}>
              <span className="product-cell">
                <span className="select-shell item-select-shell">
                  <select className="line-select item-select" aria-label={`Item for ${line.rawText}`} value={reviewLine.item?.id ?? ""} onChange={(event) => chooseCatalogItem(index, event.target.value)}>
                    <option value="">Unidentified item</option>
                    {!reviewLine.item && <option value="__create_new_item__">Create “{suggestedCatalogItem?.name ?? "new item"}” option…</option>}
                    {catalogItems.map((catalogItem) => <option value={catalogItem.id} key={catalogItem.id}>{catalogItem.name}</option>)}
                  </select>
                  <span aria-hidden="true">⌄</span>
                </span>
                <small className="raw-line">{line.rawText}</small>
              </span>
              <span className="product-meta">
                <span className="quantity-unit" aria-label="Amount bought">
                  <input className="line-input quantity-input" inputMode="decimal" aria-label={`Quantity for ${reviewLine.title}`} value={reviewLine.quantity} placeholder="—" onChange={(event) => updateLine(index, { quantity: event.target.value })} />
                  <input className="line-input unit-input" aria-label={`Unit for ${reviewLine.title}`} list={selectedUnitList} value={reviewLine.unit} placeholder="unitless" onChange={(event) => updateLine(index, { unit: event.target.value })} />
                </span>
                {reviewLine.item && <datalist id={`unit-options-${index}`}>{reviewLine.item.units.map((unit) => <option value={unit} key={unit} />)}</datalist>}
                <span className="select-shell category-select-shell">
                  <select className="line-select category-select" aria-label={`Category for ${reviewLine.title}`} value={reviewLine.category} onChange={(event) => updateLine(index, { category: event.target.value })}>
                    {groceryCategories.map((category) => <option value={category} key={category}>{category}</option>)}
                  </select>
                  <span aria-hidden="true">⌄</span>
                </span>
              </span>
              <span className="amount-cell">{themeMoney(line.amount)}</span>
              <span className={matchClass}>{matchLabel}</span>
            </div>;
          })}
            <div className="reconciliation-summary" aria-label="Subtotal calculation"><div className="reconciliation-heading"><span>Receipt math</span><strong className={isReconciled ? "reconciliation-ok" : "reconciliation-discount"}>{isReconciled ? "✓ Totals reconcile" : "Review totals"}</strong></div><div className="reconciliation-grid"><div><span>Product total</span><strong>{themeMoney(reconciliation?.productTotal ?? null)}</strong><small>Before coupons</small></div><div><span>Coupons / discounts</span><strong className="reconciliation-discount">{(reconciliation?.discountTotal ?? 0) > 0 ? `−${themeMoney(reconciliation?.discountTotal ?? 0)}` : themeMoney(0)}</strong><small>Applied to product total</small></div>{(reconciliation?.bagFee ?? 0) > 0 && <div><span>Paper bags</span><strong>{themeMoney(reconciliation?.bagFee ?? 0)}</strong><small>Assumed at $0.05 each</small></div>}<div><span>Calculated subtotal</span><strong>{themeMoney(reconciliation?.calculatedSubtotal ?? null)}</strong><small>Product total minus coupons and bags</small></div></div></div>
          </div>
          <details className="raw-details"><summary>Developer details · raw OCR and report tools</summary><div className="developer-actions"><button className="quiet-button" type="button" onClick={() => void copyDevReport()}>{reportCopied ? "Report copied" : "Copy full Markdown report"}<span aria-hidden="true">↗</span></button></div><pre>{rawText || "No transcribed receipt text returned."}</pre></details>
          <PurchaseAnalysis receiptSource={receiptSource} catalogItems={catalogItems} unidentifiedCount={unidentifiedCount} />
        </>}
      </div>
    </section>
  </>;
}
