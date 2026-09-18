"use client";

import Link from "next/link";
import type { Route } from "next";
import { useState } from "react";
import { AnomalyStatus, useDemoState } from "../components/demo-context";
import { PurchaseReviewDialog } from "../components/purchase-review-dialog";
import { PageHeading } from "./page-heading";

const anomalyLabels: Record<AnomalyStatus, string> = {
  "needs-review": "Detergent purchase looks unusual",
  approved: "Detergent purchase approved",
  investigate: "Detergent purchase is being investigated",
  closed: "Detergent purchase review closed",
};

export default function TodoView() {
  const { anomalyStatus, milkOutcome, setMilkOutcome, stockCount, setStockCount } = useDemoState();
  const [reviewOpen, setReviewOpen] = useState(false);
  const [stockInput, setStockInput] = useState(stockCount == null ? "" : String(stockCount));
  const anomalyDone = anomalyStatus !== "needs-review";
  const milkLabel = milkOutcome === "used" ? "Used" : milkOutcome === "frozen" ? "Frozen" : milkOutcome === "discarded" ? "Discarded" : null;

  function saveStockCount() {
    const count = Number(stockInput);
    if (Number.isFinite(count) && count >= 0) setStockCount(Math.round(count));
  }

  return <>
    <PageHeading eyebrow="To-Do" title="Every required action, in one place." description="If something needs attention, the next action sits beside it. Complete it here and the rest of the demo updates." action={<span className="demo-badge">{[!milkOutcome, true, !anomalyDone, stockCount == null].filter(Boolean).length} open items</span>} />
    <section className="todo-layout">
      <div className="todo-column"><div className="todo-section-heading"><h2>Needs attention</h2><span>Act on what is open</span></div>
        {!milkOutcome && <article className="task-card"><div className="task-icon warning-icon">!</div><div className="task-body"><span className="task-type">Expired / storage review</span><h3>Milk reaches storage review today</h3><p>Choose the outcome so the kitchen record stays current.</p><div className="task-actions"><button className="task-button" type="button" onClick={() => setMilkOutcome("used")}>Used</button><button className="task-button" type="button" onClick={() => setMilkOutcome("frozen")}>Frozen</button><button className="task-button" type="button" onClick={() => setMilkOutcome("discarded")}>Discarded</button></div></div></article>}
        <article className="task-card"><div className="task-icon receipt-icon">R</div><div className="task-body"><span className="task-type">Missing receipt</span><h3>Yesterday&apos;s ShopRite purchase needs a receipt</h3><p>Keep the transaction tied to the items that were purchased.</p><div className="task-actions"><Link className="task-button primary-task" href={"/capture" as Route}>Scan receipt <span>↗</span></Link></div></div></article>
        {!anomalyDone && <article className="task-card"><div className="task-icon warning-icon">!</div><div className="task-body"><span className="task-type">Purchasing anomaly</span><h3>{anomalyLabels[anomalyStatus]}</h3><p>Same Tide Pods purchase appeared again after 4 days.</p><div className="task-actions"><button className="task-button primary-task" type="button" onClick={() => setReviewOpen(true)}>Review <span>↗</span></button></div></div></article>}
        {stockCount == null && <article className="task-card"><div className="task-icon count-icon">#</div><div className="task-body"><span className="task-type">Optional stock check</span><h3>Confirm detergent quantity</h3><p>A quick count makes the next purchasing decision more useful.</p><div className="count-action"><label htmlFor="detergent-count">Current quantity</label><input id="detergent-count" inputMode="numeric" type="number" min="0" value={stockInput} onChange={(event) => setStockInput(event.target.value)} /><button className="task-button primary-task" type="button" onClick={saveStockCount} disabled={!stockInput}>Save count</button></div></div></article>}
      </div>
      <aside className="todo-column completed-column"><div className="todo-section-heading"><h2>Completed</h2><span>Recorded in this demo</span></div>{milkOutcome && <div className="completed-row"><span className="check-mark">✓</span><div><strong>Milk storage review</strong><small>Marked {milkLabel?.toLowerCase()}</small></div><span className="completed-time">Today</span></div>}{anomalyDone && <div className="completed-row"><span className="check-mark">✓</span><div><strong>{anomalyLabels[anomalyStatus]}</strong><small>{anomalyStatus === "approved" ? "Approved" : anomalyStatus === "investigate" ? "Investigation open" : "Closed"}</small></div><span className="completed-time">Today</span></div>}{stockCount != null && <div className="completed-row"><span className="check-mark">✓</span><div><strong>Detergent quantity confirmed</strong><small>{stockCount} units recorded</small></div><span className="completed-time">Today</span></div>}{!milkOutcome && !anomalyDone && stockCount == null && <div className="completed-empty"><span className="empty-index">01</span><p>Completed actions will collect here as staff work through the list.</p></div>}</aside>
    </section>
    <PurchaseReviewDialog open={reviewOpen} onClose={() => setReviewOpen(false)} />
  </>;
}
