"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { content, type Lang } from "@/lib/content";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (typeof content)["al"] | (typeof content)["en"];
};

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("al");

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    if (typeof document !== "undefined") {
      document.documentElement.lang = l === "en" ? "en" : "sq";
    }
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, t: lang === "en" ? content.en : content.al }),
    [lang, setLang],
  );

  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
