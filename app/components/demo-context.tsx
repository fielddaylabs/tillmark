"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

export type AnomalyStatus = "needs-review" | "approved" | "investigate" | "closed";
export type KitchenPhase = "scheduled" | "prep" | "sauce" | "safety" | "portions" | "complete";
export type MilkOutcome = "used" | "frozen" | "discarded";

type DashboardDemoState = {
  anomalyStatus: AnomalyStatus;
  stockCount: number | null;
};

type TodoDemoState = {
  anomalyStatus: AnomalyStatus;
  milkOutcome: MilkOutcome | null;
  stockCount: number | null;
};

type KitchenDemoState = {
  kitchenPhase: KitchenPhase;
  leftoverServings: number | null;
};

type DashboardContextValue = DashboardDemoState & {
  setAnomalyStatus: (status: AnomalyStatus) => void;
};

type TodoContextValue = TodoDemoState & {
  setAnomalyStatus: (status: AnomalyStatus) => void;
  setMilkOutcome: (outcome: MilkOutcome) => void;
  setStockCount: (count: number) => void;
};

type KitchenContextValue = KitchenDemoState & {
  setKitchenPhase: (phase: KitchenPhase) => void;
  setLeftoverServings: (servings: number) => void;
};

const dashboardStorageKey = "tillmark-dashboard-demo-state";
const todoStorageKey = "tillmark-todo-demo-state";
const kitchenStorageKey = "tillmark-kitchen-demo-state";

const initialDashboardState: DashboardDemoState = { anomalyStatus: "needs-review", stockCount: null };
const initialTodoState: TodoDemoState = { anomalyStatus: "needs-review", milkOutcome: null, stockCount: null };
const initialKitchenState: KitchenDemoState = { kitchenPhase: "scheduled", leftoverServings: null };

function useStoredState<T extends object>(storageKey: string, initialState: T) {
  const [state, setState] = useState<T>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const parsed = JSON.parse(stored) as unknown;
        if (parsed && typeof parsed === "object") setState({ ...initialState, ...parsed });
      }
    } catch {
      // The demo remains available when browser storage is unavailable.
    } finally {
      setHydrated(true);
    }
  }, [initialState, storageKey]);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(state));
    } catch {
      // The state remains available in memory when browser storage is unavailable.
    }
  }, [hydrated, state, storageKey]);

  return [state, setState] as const;
}

const DashboardContext = createContext<DashboardContextValue | null>(null);
const TodoContext = createContext<TodoContextValue | null>(null);
const KitchenContext = createContext<KitchenContextValue | null>(null);

function DashboardDemoProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useStoredState(dashboardStorageKey, initialDashboardState);
  const value = useMemo<DashboardContextValue>(() => ({
    ...state,
    setAnomalyStatus: (anomalyStatus) => setState((current) => ({ ...current, anomalyStatus })),
  }), [setState, state]);
  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

function TodoDemoProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useStoredState(todoStorageKey, initialTodoState);
  const value = useMemo<TodoContextValue>(() => ({
    ...state,
    setAnomalyStatus: (anomalyStatus) => setState((current) => ({ ...current, anomalyStatus })),
    setMilkOutcome: (milkOutcome) => setState((current) => ({ ...current, milkOutcome })),
    setStockCount: (stockCount) => setState((current) => ({ ...current, stockCount })),
  }), [setState, state]);
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

function KitchenDemoProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useStoredState(kitchenStorageKey, initialKitchenState);
  const value = useMemo<KitchenContextValue>(() => ({
    ...state,
    setKitchenPhase: (kitchenPhase) => setState((current) => ({ ...current, kitchenPhase })),
    setLeftoverServings: (leftoverServings) => setState((current) => ({ ...current, leftoverServings, kitchenPhase: "complete" })),
  }), [setState, state]);
  return <KitchenContext.Provider value={value}>{children}</KitchenContext.Provider>;
}

export function DemoProvider({ children }: { children: ReactNode }) {
  return <DashboardDemoProvider><TodoDemoProvider><KitchenDemoProvider>{children}</KitchenDemoProvider></TodoDemoProvider></DashboardDemoProvider>;
}

export function useDashboardState() {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("useDashboardState must be used inside DemoProvider");
  return context;
}

export function useTodoState() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodoState must be used inside DemoProvider");
  return context;
}

export function useKitchenState() {
  const context = useContext(KitchenContext);
  if (!context) throw new Error("useKitchenState must be used inside DemoProvider");
  return context;
}
