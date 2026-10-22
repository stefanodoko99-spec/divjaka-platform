"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

export type BasketLine = { idx: number; qty: number };

type Ctx = {
  lines: BasketLine[];
  count: number;
  add: (idx: number) => void;
  remove: (idx: number) => void;
  clear: () => void;
  has: (idx: number) => boolean;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const BasketCtx = createContext<Ctx | null>(null);

/* Products are keyed by their position in the catalogue rather than by name,
   so a basket survives the language toggle. */
export function BasketProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<BasketLine[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((idx: number) => {
    setLines((prev) => {
      const found = prev.find((l) => l.idx === idx);
      if (found) return prev.map((l) => (l.idx === idx ? { ...l, qty: l.qty + 1 } : l));
      return [...prev, { idx, qty: 1 }];
    });
  }, []);

  const remove = useCallback((idx: number) => {
    setLines((prev) =>
      prev
        .map((l) => (l.idx === idx ? { ...l, qty: l.qty - 1 } : l))
        .filter((l) => l.qty > 0),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const value = useMemo<Ctx>(
    () => ({
      lines,
      count: lines.reduce((n, l) => n + l.qty, 0),
      add,
      remove,
      clear,
      has: (idx: number) => lines.some((l) => l.idx === idx),
      open,
      setOpen,
    }),
    [lines, add, remove, clear, open],
  );

  return <BasketCtx.Provider value={value}>{children}</BasketCtx.Provider>;
}

export function useBasket() {
  const ctx = useContext(BasketCtx);
  if (!ctx) throw new Error("useBasket must be used inside BasketProvider");
  return ctx;
}
