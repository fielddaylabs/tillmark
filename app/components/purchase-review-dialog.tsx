"use client";

import { AnomalyStatus, useDemoState } from "./demo-context";

type PurchaseReviewDialogProps = {
  open: boolean;
  onClose: () => void;
};

const statusCopy: Record<AnomalyStatus, string> = {
  "needs-review": "Needs review",
  approved: "Approved",
  investigate: "Investigating",
  closed: "Closed",
};

export function PurchaseReviewDialog({ open, onClose }: PurchaseReviewDialogProps) {
  const { anomalyStatus, setAnomalyStatus } = useDemoState();
  if (!open) return null;

  function updateStatus(status: AnomalyStatus) {
    setAnomalyStatus(status);
    onClose();
  }

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="review-dialog" role="dialog" aria-modal="true" aria-labelledby="review-dialog-title">
        <div className="dialog-heading">
          <div><p className="eyebrow">Purchasing review</p><h2 id="review-dialog-title">Tide Pods</h2></div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close purchase review">×</button>
        </div>
        <div className="dialog-status"><span className="status-chip warning">{statusCopy[anomalyStatus]}</span><span>Seeded demo comparison</span></div>
        <div className="evidence-grid">
          <div><span>Current purchase</span><strong>$18.99</strong><small>ShopRite · Sep 18, 2026</small></div>
          <div><span>Previous purchase</span><strong>$18.99</strong><small>ShopRite · Sep 14, 2026</small></div>
          <div><span>Time between</span><strong>4 days</strong><small>Normal replenishment is about 30 days</small></div>
        </div>
        <p className="dialog-explanation">The same detergent was purchased again before the expected replenishment window. Confirm the purchase, ask for more context, or close the review.</p>
        <div className="dialog-actions">
          <button className="secondary-button" type="button" onClick={() => updateStatus("approved")}>Approve <span>✓</span></button>
          <button className="secondary-button" type="button" onClick={() => updateStatus("investigate")}>Investigate <span>?</span></button>
          <button className="quiet-button" type="button" onClick={() => updateStatus("closed")}>Close review</button>
        </div>
      </section>
    </div>
  );
}
