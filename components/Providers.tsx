"use client";

import { useCallback, useState } from "react";
import { LangProvider } from "./LangContext";
import { ReadyCtx } from "./ReadyContext";
import SmoothScroll from "./SmoothScroll";
import Cursor from "./Cursor";
import Loader from "./Loader";
import Nav from "./Nav";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);
  const onDone = useCallback(() => setReady(true), []);

  return (
    <LangProvider>
      <ReadyCtx.Provider value={ready}>
        <SmoothScroll />
        <Cursor />
        <Loader onDone={onDone} />
        <Nav />
        {children}
      </ReadyCtx.Provider>
    </LangProvider>
  );
}
