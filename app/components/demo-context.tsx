"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type AnomalyStatus = "needs-review" | "approved" | "investigate" | "closed";
export type KitchenPhase = "scheduled" | "prep" | "sauce" | "safety" | "portions" | "complete";

type DemoState = {
  anomalyStatus: AnomalyStatus;
  milkOutcome: "used" | "frozen" | "discarded" | null;
  stockCount: number | null;
  kitchenPhase: KitchenPhase;
  leftoverServings: number | null;
};

type DemoContextValue = DemoState & {
  setAnomalyStatus: (status: AnomalyStatus) => void;
  setMilkOutcome: (outcome: "used" | "frozen" | "discarded") => void;
  setStockCount: (count: number) => void;
  setKitchenPhase: (phase: KitchenPhase) => void;
  setLeftoverServings: (servings: number) => void;
};

const demoStorageKey = "tillmark-demo-state";

const initialState: DemoState = {
  anomalyStatus: "needs-review",
  milkOutcome: null,
  stockCount: null,
  kitchenPhase: "scheduled",
  leftoverServings: null,
};

const DemoContext = createContext<DemoContextValue | null>(null);

export function DemoProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<DemoState>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(demoStorageKey);
      if (stored) setState({ ...initialState, ...JSON.parse(stored) });
    } catch {
      // The demo still works when storage is unavailable.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(demoStorageKey, JSON.stringify(state));
    } catch {
      // The state remains available for this session.
    }
  }, [hydrated, state]);

  const value = useMemo<DemoContextValue>(() => ({
    ...state,
    setAnomalyStatus: (anomalyStatus) => setState((current) => ({ ...current, anomalyStatus })),
    setMilkOutcome: (milkOutcome) => setState((current) => ({ ...current, milkOutcome })),
    setStockCount: (stockCount) => setState((current) => ({ ...current, stockCount })),
    setKitchenPhase: (kitchenPhase) => setState((current) => ({ ...current, kitchenPhase })),
    setLeftoverServings: (leftoverServings) => setState((current) => ({ ...current, leftoverServings, kitchenPhase: "complete" })),
  }), [state]);

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemoState() {
  const context = useContext(DemoContext);
  if (!context) throw new Error("useDemoState must be used inside DemoProvider");
  return context;
}
