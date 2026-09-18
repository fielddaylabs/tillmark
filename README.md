# Tillmark

A focused Next.js + TypeScript receipt extraction app. Tillmark accepts a JPG, PNG, or WebP receipt image, sends it to the server-side `/api/ocr` route, and returns structured receipt data without storing results in this app.

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Add an `OPENAI_API_KEY`.
3. Run `npm install` and `npm run dev`.
4. Open `http://localhost:3000`.

`OPENAI_MODEL` defaults to `gpt-5.6-luna` and can be changed without editing code.

## Demonstrated

- Receipt test-set overview with spend and review metrics.
- Server-side image upload validation.
- OpenAI Responses API image input with strict structured JSON output.
- Merchant, date, currency, totals, line items, quantities, units, confidence, and review flags.
- Raw OCR text remains inspectable in the UI.
- No database, analytics, calculations, authentication, or long-term result storage yet.

The API request sets `store: false`; add authentication, rate limiting, and deployment secrets before exposing this beyond a private demo.
<<<<<<< HEAD

=======
>>>>>>> 5c61f4c (init)
