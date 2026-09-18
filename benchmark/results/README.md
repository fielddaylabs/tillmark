# Full benchmark outputs

Each JSON file contains the complete output for one fixture:

- `receipt`: parsed structured extraction, including every line, adjustment, warning, and timing field
- `rawText`: the extracted OCR transcription
- `rawOutputText`: the model's complete JSON text before parsing
- `providerResponse`: the complete provider response envelope

For a single-page view, open [`report.md`](./report.md). It expands all 30 parsed outputs, OCR transcriptions, and raw model JSON texts, with links back to each source image and complete JSON file.

The file name matches the fixture ID in `../manifest.json`. These outputs are from the current fixture images and should be regenerated whenever those images change.
