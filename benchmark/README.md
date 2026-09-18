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

Open the [`receipts`](./receipts) folder to view the source images. The [`manifest.json`](./manifest.json) file maps every image to its retailer, source URL, source type, and benchmark notes. The [`results.tsv`](./results.tsv) file records the latest observed run status and high-level extraction output.

These are intentionally mixed-quality examples. Some are full receipts, while others are cropped, photographed at a distance, partially obscured, or included specifically as failure cases. They should not all be treated as clean ground truth.

## Latest run

- 30 inputs
- 29 valid structured responses
- 1 incomplete response caused by output truncation on a very small Stop & Shop receipt
- Successful-run median: 11.0 seconds
- Successful-run average: 12.6 seconds

The benchmark results are observational outputs from the current extractor, not hand-labeled accuracy scores. When adding a new fixture, add its source and quality notes to `manifest.json` and rerun the benchmark before changing the summary.
