"use client";

import { useCallback, useState } from "react";
import { LangProvider } from "./LangContext";
import { BasketProvider } from "./BasketContext";
import { ReadyCtx } from "./ReadyContext";
import SmoothScroll from "./SmoothScroll";
import Cursor from "./Cursor";
import Loader from "./Loader";
import Nav from "./Nav";
import Basket from "./Basket";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);

  return (
    <LangProvider>
      <BasketProvider>
        <ReadyCtx.Provider value={ready}>
          <SmoothScroll />
          <Cursor />
          <Loader onDone={onDone} />
          <Nav />
          {children}
          <Basket />
        </ReadyCtx.Provider>
      </BasketProvider>
    </LangProvider>
  );
}
