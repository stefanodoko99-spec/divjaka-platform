"use client";

import { createContext, useContext } from "react";

export const ReadyCtx = createContext(false);
export const useReady = () => useContext(ReadyCtx);
