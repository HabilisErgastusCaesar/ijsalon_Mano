"use client";

import React from "react";
import { IjssalonContextProvider } from "@/Context/ijssalonContext";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return <IjssalonContextProvider>{children}</IjssalonContextProvider>;
}
