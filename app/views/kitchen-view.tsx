"use client";

import { KitchenPhase, useDemoState } from "../components/demo-context";
import { PageHeading } from "./page-heading";

const phaseTitles: Record<KitchenPhase, string> = {
  scheduled: "Dinner is scheduled",
  prep: "Set up the station",
  sauce: "Build the dish",
  safety: "Food safety check",
  portions: "Record leftovers",
  complete: "Dinner complete",
};

export default function KitchenView() {
  const { kitchenPhase, leftoverServings, setKitchenPhase, setLeftoverServings } = useDemoState();
  const isStarted = kitchenPhase !== "scheduled";
  const isComplete = kitchenPhase === "complete";

  function advance() {
    const next: Record<Exclude<KitchenPhase, "complete" | "scheduled">, KitchenPhase> = { prep: "sauce", sauce: "safety", safety: "portions", portions: "complete" };
    if (kitchenPhase in next) setKitchenPhase(next[kitchenPhase as Exclude<KitchenPhase, "complete" | "scheduled">]);
  }

  return <>
    <PageHeading eyebrow="Kitchen" title="Make the next meal obvious." description="A focused cooking workflow for a small touchscreen: scheduled meal, clear steps, safety check, leftovers recorded." action={<span className="demo-badge">Phase 2 preview</span>} />
    <section className="kitchen-screen">
      <div className="kitchen-topbar"><span className="kitchen-home">Maple House kitchen</span><span className="kitchen-date">Dinner · Today</span></div>
      <div className="kitchen-layout">
        <div className="meal-summary"><span className="meal-kicker">Tonight&apos;s meal</span><h2>Chicken Parmesan</h2><p>6 servings</p><div className="meal-meta"><span>Prep time</span><strong>45 min</strong></div><div className="meal-meta"><span>Assigned station</span><strong>Hot line</strong></div>{isStarted && !isComplete && <div className="progress-rail" aria-label="Cooking progress"><i className={`progress-${kitchenPhase}`} /></div>}</div>
        <div className="kitchen-step"><span className="step-state">{isComplete ? "Complete" : isStarted ? "In progress" : "Ready to begin"}</span><h3>{phaseTitles[kitchenPhase]}</h3>
          {kitchenPhase === "scheduled" && <><p className="step-copy">Follow a few guided steps, then record how many portions are ready for later.</p><button className="kitchen-primary" type="button" onClick={() => setKitchenPhase("prep")}>Start Cooking <span>→</span></button></>}
          {kitchenPhase === "prep" && <><p className="step-copy">Set out chicken, breadcrumbs, sauce, mozzarella, and a clean thermometer.</p><div className="step-checklist"><span>Chicken breast</span><span>Marinara sauce</span><span>Mozzarella</span></div><button className="kitchen-primary" type="button" onClick={advance}>Station ready <span>→</span></button></>}
          {kitchenPhase === "sauce" && <><p className="step-copy">Brown the chicken, cover with marinara, and finish with mozzarella until melted.</p><div className="step-note"><strong>Keep the sauce simmering gently.</strong><span>Use the timer on the stove for the next 12 minutes.</span></div><button className="kitchen-primary" type="button" onClick={advance}>Continue to safety check <span>→</span></button></>}
          {kitchenPhase === "safety" && <><div className="safety-card"><span className="safety-label">Food Safety Check</span><strong>Insert the digital thermometer into the thickest part of the chicken, avoiding bone.</strong><p>Continue cooking until it reaches at least <b>165°F</b>.</p></div><button className="kitchen-primary safety-button" type="button" onClick={advance}>Verified 165°F+ <span>✓</span></button></>}
          {kitchenPhase === "portions" && <><p className="step-copy">Dinner is ready. How many portions are left after serving?</p><div className="portion-grid">{[0, 1, 2, 3, 4].map((portion) => <button type="button" key={portion} onClick={() => setLeftoverServings(portion)}>{portion === 4 ? "4+" : portion}</button>)}</div><span className="portion-help">Select the closest count. You can adjust it before closing the meal.</span></>}
          {isComplete && <div className="completion-card"><span className="completion-mark">✓</span><strong>{leftoverServings === 0 ? "No leftovers recorded" : `${leftoverServings === 4 ? "4+" : leftoverServings} leftover servings recorded`}</strong><p>{leftoverServings === 3 ? "Labels ready to print" : "Meal record saved in the demo"}</p>{leftoverServings === 3 && <div className="leftover-label"><strong>Chicken Parmesan</strong><span>Prepared: Today, 6:14 PM</span><span>3 servings</span><span>Use / discard by: Sep 21, 2026</span></div>}<button className="quiet-button" type="button" onClick={() => { setLeftoverServings(0); setKitchenPhase("scheduled"); }}>Start next meal</button></div>}
        </div>
      </div>
    </section>
  </>;
}
