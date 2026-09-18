# Receipt extraction benchmark

This folder contains the 30 public and user-provided receipt images used for the current extraction benchmark.

The set contains five examples each from six chains:

- Aldi
- Hannaford
- ShopRite
- Stop & Shop
- Target
- Walmart

Adams, Restaurant Depot, and Price Chopper are not included in this round.

## How to inspect the set

Open the [`receipts`](./receipts) folder to view the source images. The [`manifest.json`](./manifest.json) file maps every image to its retailer, source URL, source type, and benchmark notes. The [`results.tsv`](./results.tsv) file records the latest observed run status and high-level extraction output. The [`results`](./results) folder contains the complete per-receipt JSON outputs, including structured extraction, full OCR text, warnings, timing, and raw model response.

These are intentionally mixed-quality examples. Some are full receipts, while others are cropped, photographed at a distance, partially obscured, or included specifically as failure cases. They should not all be treated as clean ground truth.

## Latest run

- 30 inputs
- 30 valid structured responses
- 0 incomplete responses
- Successful-run median: 11.8 seconds
- Successful-run average: 18.0 seconds
- Slowest run: 136.4 seconds on `aldi-04`

The benchmark results are observational outputs from the current extractor, not hand-labeled accuracy scores. The rerun used the current extraction instructions and schema through an isolated HTTP/1.1 request harness because the local Node runtime's SDK transport was unreliable. When adding a new fixture, add its source and quality notes to `manifest.json` and rerun the benchmark before changing the summary.
