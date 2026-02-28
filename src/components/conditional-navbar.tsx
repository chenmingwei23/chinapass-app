"use client";

import { usePathname } from "next/navigation";
import { AppNavbar } from "./app-navbar";

/** Renders the inner-page navbar + spacer on all routes except the landing page. */
export function ConditionalNavbar() {
  const pathname = usePathname();
  if (pathname === "/") return null;
  return (
    <>
      <AppNavbar />
      <div className="h-14" />
    </>
  );
}
