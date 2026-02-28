"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#solution", label: "The App" },
  { href: "#screens", label: "Screens" },
  { href: "#principles", label: "Design" },
  { href: "#compare", label: "Before/After" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`}>
      <Link href="/" className="nav-brand">
        China<span>Pass</span>
      </Link>
      <div className="nav-links">
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} className="nav-link">
            {l.label}
          </a>
        ))}
        <Link href="/chat" className="nav-cta">
          Ask AI Guide
        </Link>
      </div>
    </nav>
  );
}
