"use client";

import { useEffect, useRef } from "react";

const CARDS = [
  {
    num: "01 / 06",
    icon: "🎬",
    title: "Cinematic storytelling, not feature lists",
    body: "Amazon BIL builds campaigns that feel like docuseries. ChinaPass's onboarding tells the story of arriving in China unprepared — then resolves it. Every screen has narrative momentum, not just utility.",
    source: "BIL · Sims Campaign",
    delay: "",
  },
  {
    num: "02 / 06",
    icon: "🎯",
    title: "Converged funnel: awareness → action in one experience",
    body: "BIL's signature move: collapse the entire journey into one touchpoint. ChinaPass does the same — from \"what do I need?\" to \"I'm set up and booking a restaurant\" without leaving the app.",
    source: "BIL · Converged Funnel",
    delay: "reveal-delay-1",
  },
  {
    num: "03 / 06",
    icon: "📜",
    title: "Scrollytelling for complex information",
    body: "The New York Times proved scrollytelling drives 3,000× more reads than static articles. ChinaPass's setup wizard applies the same principle: reveal each step as the user is ready, never all at once.",
    source: "NYT · Snow Fall",
    delay: "reveal-delay-2",
  },
  {
    num: "04 / 06",
    icon: "🔕",
    title: "Calm over clever — stress-free UX as product promise",
    body: "BIL campaigns build emotional resonance first, then sell. ChinaPass's promise is calm. Every interaction — error states, loading screens, empty states — is designed to reduce anxiety, not add to it.",
    source: "UX Principle",
    delay: "reveal-delay-1",
  },
  {
    num: "05 / 06",
    icon: "🏗️",
    title: "Sticky context — never lose the user's place",
    body: "BIL interactive pages use persistent context elements (progress indicators, section trackers) so users always know where they are. ChinaPass uses a visible checklist progress bar, trip header, and phase labels throughout.",
    source: "BIL · Interactive Pages",
    delay: "reveal-delay-2",
  },
  {
    num: "06 / 06",
    icon: "🎨",
    title: "Visual hierarchy tells the story before words do",
    body: "BIL uses bold typography contrast and editorial white space to guide eye movement. ChinaPass's serif display type creates gravitas; the left-border accent on setup items communicates status before the badge is read.",
    source: "BIL · Typography System",
    delay: "reveal-delay-3",
  },
];

export function Principles() {
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
    <section className="principles" id="principles" ref={sectionRef}>
      <div className="pr-header reveal">
        <div className="pr-eyebrow">04 — Design Principles</div>
        <h2 className="pr-title">
          Borrowed from the<br /><em>best.</em> Built for China.
        </h2>
      </div>
      <div className="pr-grid">
        {CARDS.map((card) => (
          <div key={card.num} className={`pr-card reveal ${card.delay}`}>
            <div className="pr-card-num">{card.num}</div>
            <div className="pr-card-icon">{card.icon}</div>
            <h3 className="pr-card-title">{card.title}</h3>
            <p className="pr-card-body">{card.body}</p>
            <div className="pr-card-source">{card.source}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
