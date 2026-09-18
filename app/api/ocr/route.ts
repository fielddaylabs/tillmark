import OpenAI from "openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const receiptSchema = {
  type: "object",
  additionalProperties: false,
  properties: {
    merchant: { type: ["string", "null"] },
    date: { type: ["string", "null"] },
    currency: { type: ["string", "null"] },
    subtotal: { type: ["number", "null"] },
    tax: { type: ["number", "null"] },
    total: { type: ["number", "null"] },
    balance: { type: ["number", "null"] },
    lines: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: false,
        properties: {
          rawText: { type: "string" },
          description: { type: ["string", "null"] },
          quantity: { type: ["number", "null"] },
          unit: { type: ["string", "null"] },
          unitPrice: { type: ["number", "null"] },
          amount: { type: ["number", "null"] },
          category: { type: ["string", "null"] },
          confidence: { type: "number" },
          needsReview: { type: "boolean" },
        },
        required: ["rawText", "description", "quantity", "unit", "unitPrice", "amount", "category", "confidence", "needsReview"],
      },
    },
    warnings: { type: "array", items: { type: "string" } },
  },
  required: ["merchant", "date", "currency", "subtotal", "tax", "total", "balance", "lines", "warnings"],
} as const;

const instructions = `You extract receipt data from one receipt photo. Return only the requested JSON.
Read the image carefully, including narrow thermal receipts and multiple price columns.
Do not treat coupon, discount, "on sale you saved", tax, payment, change, loyalty, or balance rows as purchased line items.
For each purchased item, preserve the raw visible line text, normalize the product description, and distinguish quantity, unit price, and line amount.
Use null when a value cannot be read. Never invent a value. Set needsReview true when any important field is uncertain or OCR confidence is below 90.
The receipt total/balance must be reported separately from line items.`;

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "OPENAI_API_KEY is not configured on the server." }, { status: 500 });
  const formData = await request.formData();
  const file = formData.get("receipt");
  if (!(file instanceof File)) return NextResponse.json({ error: "Upload a receipt image." }, { status: 400 });
  if (!file.type.startsWith("image/")) return NextResponse.json({ error: "Receipt must be a JPG, PNG, or WebP image." }, { status: 400 });
  if (file.size > 10 * 1024 * 1024) return NextResponse.json({ error: "Receipt image must be 10 MB or smaller." }, { status: 400 });

  try {
    const imageData = `data:${file.type};base64,${Buffer.from(await file.arrayBuffer()).toString("base64")}`;
    const client = new OpenAI({ apiKey });
    const response = await client.responses.create({
      model: process.env.OPENAI_MODEL || "gpt-5.6-luna",
      store: false,
      instructions,
      input: [{ role: "user", content: [{ type: "input_text", text: "Extract this receipt." }, { type: "input_image", image_url: imageData, detail: "high" }] }],
      text: { format: { type: "json_schema", name: "receipt_ocr", strict: true, schema: receiptSchema } },
    });
    const receipt = JSON.parse(response.output_text);
    return NextResponse.json({ receipt, rawText: receipt.lines.map((line: { rawText: string }) => line.rawText).join("\n") });
  } catch (error) {
    console.error("Receipt OCR failed", error);
    return NextResponse.json({ error: "The receipt could not be extracted. Try a flatter, brighter photo." }, { status: 502 });
  }
}

