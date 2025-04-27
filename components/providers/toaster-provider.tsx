"use client";

import { Toaster } from "@/components/ui/sonner";
import { ClientOnly } from "./client-only-provider";

export function ToasterProvider() {
  return (
    <ClientOnly>
      <Toaster position="top-right" />
    </ClientOnly>
  );
}
