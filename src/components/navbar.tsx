"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/chat", label: "AI Guide" },
  { href: "/apps", label: "App Navigator" },
  { href: "/payment", label: "Payments" },
  { href: "/cities", label: "Cities" },
  { href: "/essentials", label: "Essentials" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0c0606]/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-white">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "rgba(222,41,16,0.15)", border: "1px solid rgba(222,41,16,0.3)" }}>
            <MapPin className="w-4 h-4" style={{ color: "#DE2910" }} />
          </div>
          <span>China<span style={{ color: "#DE2910" }}>Pass</span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm transition-colors",
                pathname === l.href
                  ? "text-white bg-white/8"
                  : "text-gray-500 hover:text-gray-200 hover:bg-white/5"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/chat"
            className="hidden md:block px-4 py-1.5 rounded-lg text-white text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: "#DE2910" }}
          >
            Start Chat
          </Link>
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/5 bg-[#0c0606] px-4 py-3 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-3 py-2 rounded-md text-sm transition-colors",
                pathname === l.href
                  ? "text-white bg-white/8"
                  : "text-gray-500 hover:text-white hover:bg-white/5"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/chat"
            onClick={() => setOpen(false)}
            className="mt-2 px-3 py-2 rounded-lg text-white text-sm font-semibold text-center"
            style={{ background: "#DE2910" }}
          >
            Start Chat
          </Link>
        </div>
      )}
    </header>
  );
}
