"use client";

import { useState } from "react";
import { useDemoState } from "../components/demo-context";
import { PurchaseReviewDialog } from "../components/purchase-review-dialog";
import { PageHeading } from "./page-heading";

type Home = {
  name: string;
  spend: number;
  waste: string;
  openActions: number;
  status: "Needs review" | "Watch" | "On track";
  purchases: { item: string; retailer: string; amount: string; date: string }[];
  issues: string[];
};

const homeSeed: Omit<Home, "openActions" | "status">[] = [
  { name: "Maple House", spend: 4218, waste: "6.8%", purchases: [{ item: "Tide Pods", retailer: "ShopRite", amount: "$18.99", date: "Today" }, { item: "Chicken breast", retailer: "ShopRite", amount: "$11.75", date: "Today" }], issues: ["Milk reaches storage review today"] },
  { name: "Oak House", spend: 3376, waste: "4.1%", purchases: [{ item: "Produce and pantry", retailer: "Wegmans", amount: "$86.42", date: "Yesterday" }, { item: "Ground turkey", retailer: "ShopRite", amount: "$24.16", date: "Sep 15" }], issues: ["Yesterday's ShopRite purchase needs a receipt"] },
  { name: "Lake House", spend: 2984, waste: "3.6%", purchases: [{ item: "Weekly groceries", retailer: "ShopRite", amount: "$74.80", date: "Yesterday" }, { item: "Fresh fruit", retailer: "Wegmans", amount: "$31.24", date: "Sep 14" }], issues: [] },
  { name: "Cedar House", spend: 2746, waste: "5.2%", purchases: [{ item: "Dinner ingredients", retailer: "ShopRite", amount: "$62.17", date: "Sep 16" }, { item: "Cleaning supplies", retailer: "Target", amount: "$41.08", date: "Sep 12" }], issues: ["Confirm detergent quantity"] },
  { name: "Pine House", spend: 2631, waste: "2.9%", purchases: [{ item: "Produce and dairy", retailer: "Wegmans", amount: "$58.36", date: "Sep 17" }, { item: "Pantry restock", retailer: "ShopRite", amount: "$39.85", date: "Sep 13" }], issues: [] },
  { name: "River House", spend: 2465, waste: "4.7%", purchases: [{ item: "Family groceries", retailer: "ShopRite", amount: "$66.03", date: "Sep 17" }, { item: "Bakery and produce", retailer: "Wegmans", amount: "$28.42", date: "Sep 11" }], issues: [] },
];

const spendByRetailer = [{ name: "ShopRite", amount: "$9,806", share: 53 }, { name: "Wegmans", amount: "$5,742", share: 31 }, { name: "Target", amount: "$1,984", share: 11 }, { name: "Other", amount: "$889", share: 5 }];

export default function DashboardView() {
  const { anomalyStatus, milkOutcome, stockCount } = useDemoState();
  const [selectedHome, setSelectedHome] = useState<string | null>(null);
  const [reviewOpen, setReviewOpen] = useState(false);
  const reviewOpenCount = anomalyStatus === "needs-review" ? 1 : 0;
  const operationalActions = (milkOutcome ? 0 : 1) + (stockCount == null ? 1 : 0);
  const homes: Home[] = homeSeed.map((home) => {
    if (home.name === "Maple House") {
      const openActions = reviewOpenCount + operationalActions;
      return { ...home, openActions, status: reviewOpenCount ? "Needs review" : openActions ? "Watch" : "On track" };
    }
    if (home.name === "Oak House") return { ...home, openActions: 1, status: "Watch" };
    if (home.name === "Cedar House") return { ...home, openActions: stockCount == null ? 1 : 0, status: stockCount == null ? "Watch" : "On track" };
    return { ...home, openActions: 0, status: "On track" };
  });
  const selected = homes.find((home) => home.name === selectedHome);
  const selectedIssues = selected ? [...(selected.name === "Maple House" && anomalyStatus === "needs-review" ? ["Tide Pods purchase is 4 days after the last purchase"] : []), ...selected.issues] : [];

  return <>
    <PageHeading eyebrow="Dashboard" title="See where the operation needs you." description="A manager view across six homes, with spending, waste, and required action in one place." action={<span className="demo-badge">Manager view · seeded data</span>} />
    <section className="metric-grid" aria-label="Month-to-date summary">
      <div className="metric-card featured"><span>Month-to-date spending</span><strong>$18,420</strong><small>Across six homes · Sep 1-18</small></div>
      <div className="metric-card"><span>Potentially avoidable</span><strong>$1,186</strong><small>Duplicate and premature purchases</small></div>
      <div className="metric-card"><span>Food waste</span><strong>4.6%</strong><small>Estimated by recorded outcomes</small></div>
      <div className="metric-card"><span>Missing receipts</span><strong>2</strong><small>One is from yesterday</small></div>
      <div className="metric-card"><span>Purchases to review</span><strong>{reviewOpenCount}</strong><small>{reviewOpenCount ? "Tide Pods needs a decision" : "Nothing waiting"}</small></div>
    </section>

    <section className="dashboard-grid">
      <div className="panel breakdown-panel"><div className="section-heading-row"><div><p className="eyebrow">Spend by home</p><h2>Where money is moving</h2></div><span className="panel-note">MTD</span></div><div className="bar-list">{homes.map((home) => <div className="bar-row" key={home.name}><div><span>{home.name}</span><strong>${home.spend.toLocaleString()}</strong></div><div className="bar-track"><i style={{ width: `${Math.round((home.spend / 4218) * 100)}%` }} /></div></div>)}</div></div>
      <div className="panel breakdown-panel"><div className="section-heading-row"><div><p className="eyebrow">Spend by retailer</p><h2>Where purchases happen</h2></div><span className="panel-note">MTD</span></div><div className="retailer-list">{spendByRetailer.map((retailer) => <div className="retailer-row" key={retailer.name}><div><strong>{retailer.name}</strong><span>{retailer.share}% of spend</span></div><strong>{retailer.amount}</strong></div>)}</div><div className="waste-callout"><span>Waste by home</span><strong>Maple House is highest at 6.8%</strong><small>Use the To-Do list to close the storage review.</small></div></div>
    </section>

    <section className="panel homes-panel"><div className="section-heading-row"><div><p className="eyebrow">Six-home view</p><h2>Homes and open actions</h2></div><span className="panel-note">Select a home for detail</span></div><div className="home-table"><div className="home-table-head"><span>Home</span><span>Spending</span><span>Waste</span><span>Open actions</span><span>Status</span></div>{homes.map((home) => <div className={`home-row ${selectedHome === home.name ? "selected" : ""}`} key={home.name}><button className="home-name" type="button" onClick={() => setSelectedHome(selectedHome === home.name ? null : home.name)} aria-expanded={selectedHome === home.name}><strong>{home.name}</strong><small>{home.purchases.length} recent purchases</small></button><span>{`$${home.spend.toLocaleString()}`}</span><span>{home.waste}</span><span>{home.openActions || "None"}</span><span className={`status-chip ${home.status === "Needs review" ? "warning" : home.status === "Watch" ? "watch" : "success"}`}>{home.status}</span></div>)}</div>{selected ? <div className="home-detail"><div><p className="eyebrow">{selected.name}</p><h3>Recent activity</h3>{selected.purchases.map((purchase) => <div className="activity-row" key={`${purchase.item}-${purchase.date}`}><span><strong>{purchase.item}</strong><small>{purchase.retailer} · {purchase.date}</small></span><strong>{purchase.amount}</strong></div>)}</div><div><h3>Outstanding issues</h3>{selectedIssues.length ? <ul className="issue-list">{selectedIssues.map((issue) => <li key={issue}>{issue}{issue.startsWith("Tide") && <button className="inline-action" type="button" onClick={() => setReviewOpen(true)}>Review</button>}</li>)}</ul> : <p className="muted-copy">No open issues for this home.</p>}</div></div> : <p className="table-hint">Select a home to see recent purchases and outstanding issues.</p>}</section>
    <PurchaseReviewDialog open={reviewOpen} onClose={() => setReviewOpen(false)} />
  </>;
}
