"use client";

import { useEffect, useRef, useState } from "react";

const PANIC_ROWS = [
  { id: "pr1", icon: "🗺️", text: <>Google Maps — <strong>Cannot connect to server</strong></> },
  { id: "pr2", icon: "🚗", text: <>Uber — <strong>App not available in this region</strong></> },
  { id: "pr3", icon: "💬", text: <>WhatsApp — <strong>Connecting… Connecting…</strong></> },
  { id: "pr4", icon: "📧", text: <>Gmail — <strong>No connection</strong></> },
  { id: "pr5", icon: "💳", text: <>Card payment — <strong>Transaction declined</strong></> },
];

const BLOCKED_APPS = [
  { icon: "🗺️", bg: "#4285F4", name: "Maps" },
  { icon: "💬", bg: "#25D366", name: "WA" },
  { icon: "📧", bg: "#EA4335", name: "Gmail" },
  { icon: "👥", bg: "#1877F2", name: "FB" },
  { icon: "▶️", bg: "#FF0000", name: "YT" },
  { icon: "𝕏", bg: "#000000", name: "X" },
  { icon: "📸", bg: "#E1306C", name: "IG" },
  { icon: "🎵", bg: "#1DB954", name: "Spotify" },
];

export function Scrollytell() {
  const sectionRef = useRef<HTMLElement>(null);
  const [textVisible, setTextVisible] = useState(false);
  const [panicTriggered, setPanicTriggered] = useState(false);
  const [shownRows, setShownRows] = useState<number[]>([]);
  const [phoneShaking, setPhoneShaking] = useState(false);
  const [showResolved, setShowResolved] = useState(false);

  // Reveal text when section enters viewport
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setTextVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Staggered panic row animation
  useEffect(() => {
    const phoneEl = document.getElementById("panic-phone-el");
    if (!phoneEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !panicTriggered) {
          setPanicTriggered(true);
          PANIC_ROWS.forEach((_, i) => {
            setTimeout(() => setShownRows((prev) => [...prev, i]), i * 300);
          });
          setTimeout(() => setPhoneShaking(true), 1800);
          setTimeout(() => {
            setPhoneShaking(false);
            setShowResolved(true);
          }, 3300);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(phoneEl);
    return () => obs.disconnect();
  }, [panicTriggered]);

  return (
    <section className="scrollytell" ref={sectionRef} id="problem">
      <div className="scrollytell-sticky">
        <div className="st-bg" />
        <div className="st-scene">
          <div className="st-text-side">
            <div className={`st-chapter${textVisible ? " visible" : ""}`}>
              01 — The Problem
            </div>
            <h2 className={`st-headline${textVisible ? " visible" : ""}`}>
              You land in Beijing.<br />Nothing works.
            </h2>
            <p className={`st-body${textVisible ? " visible" : ""}`}>
              Google Maps, Uber, WhatsApp, Gmail — blocked. Over 90% of transactions in China
              are cashless, but foreign cards are mostly rejected at QR code terminals. Most
              travelers only discover this the hard way.
            </p>
          </div>

          <div className="st-visual-side">
            <div
              id="panic-phone-el"
              className={`panic-phone${phoneShaking ? " shaking" : ""}`}
            >
              <div className="phone-notch" style={{ background: "#111118" }} />
              <div className="panic-screen">
                {PANIC_ROWS.map((row, i) => (
                  <div
                    key={row.id}
                    className={`panic-row${shownRows.includes(i) ? " show" : ""}`}
                  >
                    <div className="panic-icon">{row.icon}</div>
                    <div className="panic-text">{row.text}</div>
                  </div>
                ))}
                <div
                  className={`panic-row safe${showResolved ? " show" : ""}`}
                  style={{ transition: "all 0.4s 0s" }}
                >
                  <div className="panic-icon">✅</div>
                  <div className="panic-text">
                    <strong>ChinaPass</strong> — All apps set up. You&apos;re good to go.
                  </div>
                </div>
              </div>
            </div>

            <div className={`blocked-grid${textVisible ? " visible" : ""}`} style={{ top: "30px", right: "-180px" }}>
              {BLOCKED_APPS.map((app) => (
                <div key={app.name} className="blocked-app">
                  <div className="blocked-app-icon blocked" style={{ background: app.bg }}>
                    {app.icon}
                  </div>
                  <div className="blocked-app-name">{app.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
