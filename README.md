# Tillmark

Tillmark is a focused Next.js + TypeScript demonstration of a residential food-operations system. It accepts a JPG, PNG, or WebP receipt image, sends it to the server-side `/api/ocr` route, and connects structured purchasing data to a seeded manager dashboard, action list, and kitchen workflow.

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Add an `OPENAI_API_KEY`.
3. Run `npm install` and `npm run dev`.
4. Open `http://localhost:3000`.

`OPENAI_MODEL` defaults to `gpt-5.6-luna` and can be changed without editing code.

## Demonstrated

- Capture: server-side receipt extraction, product identification, and a seeded purchasing anomaly.
- Dashboard: manager view covering six seeded homes with spend, waste, receipts, and review metrics.
- To-Do: one action list for storage outcomes, missing receipts, anomalies, and quick counts.
- Kitchen: scheduled meal, recipe steps, food-safety verification, and leftover portions.
- Server-side image upload validation.
- OpenAI Responses API image input with strict structured JSON output.
- Merchant, date, currency, totals, line items, quantities, units, confidence, and review flags.
- Raw OCR text remains inspectable in the UI.
- Demo actions persist only in this browser session. There is no production database, authentication, Stripe Issuing, or live inventory system yet.

The API request sets `store: false`; add authentication, rate limiting, and deployment secrets before exposing this beyond a private demo.
