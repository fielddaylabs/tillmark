"use client";

import { useEffect, useRef } from "react";
import { AnomalyStatus } from "./demo-context";

type PurchaseReviewDialogProps = {
  open: boolean;
  onClose: () => void;
  status: AnomalyStatus;
  onStatusChange: (status: AnomalyStatus) => void;
};

const statusCopy: Record<AnomalyStatus, string> = {
  "needs-review": "Needs review",
  approved: "Approved",
  investigate: "Investigating",
  closed: "Closed",
};

export function PurchaseReviewDialog({ open, onClose, status, onStatusChange }: PurchaseReviewDialogProps) {
  const dialogRef = useRef<HTMLElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    returnFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => dialogRef.current?.focus());

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus();
    };
  }, [onClose, open]);

  if (!open) return null;

  function updateStatus(nextStatus: AnomalyStatus) {
    onStatusChange(nextStatus);
    onClose();
  }

  return (
    <div className="dialog-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section ref={dialogRef} className="review-dialog" role="dialog" aria-modal="true" aria-labelledby="review-dialog-title" aria-describedby="review-dialog-description" tabIndex={-1}>
        <div className="dialog-heading">
          <div><p className="eyebrow">Purchasing review</p><h2 id="review-dialog-title">Tide Pods</h2></div>
          <button className="icon-button" type="button" onClick={onClose} aria-label="Close purchase review">×</button>
        </div>
        <div className="dialog-status"><span className={`status-chip ${status === "needs-review" ? "warning" : "success"}`}>{statusCopy[status]}</span><span>Seeded demo comparison</span></div>
        <div className="evidence-grid">
          <div><span>Current purchase</span><strong>$18.99</strong><small>ShopRite · Sep 18, 2026</small></div>
          <div><span>Previous purchase</span><strong>$18.99</strong><small>ShopRite · Sep 14, 2026</small></div>
          <div><span>Time between</span><strong>4 days</strong><small>Normal replenishment is about 30 days</small></div>
        </div>
        <p className="dialog-explanation" id="review-dialog-description">The same detergent was purchased again before the expected replenishment window. Confirm the purchase, ask for more context, or close the review.</p>
        <div className="dialog-actions">
          <button className="secondary-button" type="button" onClick={() => updateStatus("approved")}>Approve <span>✓</span></button>
          <button className="secondary-button" type="button" onClick={() => updateStatus("investigate")}>Investigate <span>?</span></button>
          <button className="quiet-button" type="button" onClick={() => updateStatus("closed")}>Close review</button>
        </div>
      </section>
    </div>
  );
}
