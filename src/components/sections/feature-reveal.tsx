"use client";

import { useEffect, useRef } from "react";

const TIERS = [
  {
    cls: "fr-tier-p0",
    tag: "P0 · Must-Have",
    title: "Survival\nGuide",
    sub: "Set up everything you need before your flight lands. Step-by-step, verified, with failure recovery.",
    items: [
      "Alipay & WeChat Pay setup wizard",
      "eSIM configuration guide",
      "VPN & connectivity prep",
      "Didi (Uber equivalent) setup",
      "Amap (China maps) walkthrough",
      "Visa & transit guide by nationality",
    ],
    num: "P0",
    delay: "",
  },
  {
    cls: "fr-tier-p1",
    tag: "P1 · Companion",
    title: "Trip\nPlanner",
    sub: "Plan, navigate, and discover China in real-time. Offline-first. Every stop verified for foreign travelers.",
    items: [
      "Visual itinerary builder with Amap",
      "Restaurant recs (Alipay-friendly)",
      "Calendar sync & day-view timeline",
      "Offline bundle download pre-trip",
      "Live camera menu translation",
      "Hidden gems & local discovery",
    ],
    num: "P1",
    delay: "reveal-delay-2",
  },
  {
    cls: "fr-tier-p2",
    tag: "P2 · AI Agents",
    title: "AI\nConcierge",
    sub: "Five specialized agents, each trained for a specific travel scenario. Works via proxy — no VPN needed.",
    items: [
      "Setup Agent — troubleshoot failures",
      "Translation Agent — contextual + allergens",
      "Restaurant Agent — curated + payment-aware",
      "Navigation Agent — Didi + metro routing",
      "Visa Agent — by nationality & port of entry",
      "Offline Q&A fallback (top 200 queries cached)",
    ],
    num: "P2",
    delay: "reveal-delay-3",
  },
];

export function FeatureReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const targets = sectionRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!targets) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.15 }
    );
    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="feature-reveal" id="solution" ref={sectionRef}>
      <div className="fr-header reveal">
        <div>
          <div className="fr-eyebrow">02 — The Solution</div>
          <h2 className="fr-title">
            Three layers.<br /><em>One journey.</em>
          </h2>
        </div>
        <p className="fr-desc">
          From survival kit to AI travel concierge — ChinaPass accompanies every stage of the trip.
        </p>
      </div>

      <div className="fr-tiers">
        {TIERS.map((tier) => (
          <div key={tier.num} className={`fr-tier ${tier.cls} reveal ${tier.delay}`}>
            <div className="fr-tier-tag">{tier.tag}</div>
            <h3 className="fr-tier-title">
              {tier.title.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </h3>
            <p className="fr-tier-sub">{tier.sub}</p>
            <div className="fr-tier-items">
              {tier.items.map((item) => (
                <div key={item} className="fr-tier-item">{item}</div>
              ))}
            </div>
            <div className="fr-tier-num">{tier.num}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
