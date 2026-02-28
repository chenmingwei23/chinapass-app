"use client";

import { useEffect, useRef } from "react";

const BEFORE = [
  {
    title: "Feature dashboard on first open",
    body: "Users greeted with a grid of all 8 setup items simultaneously. Immediately overwhelming. Bounce rate high.",
  },
  {
    title: "Static instructional text",
    body: "Setup guides as long-form articles. Users lose place, miss critical warnings, don't know when they're done.",
  },
  {
    title: 'Generic error states ("Something went wrong")',
    body: "When Alipay card linking fails, user has no next action. Abandons setup entirely.",
  },
  {
    title: "No narrative thread",
    body: "App feels like a utility, not a companion. No sense of journey or progress toward a meaningful goal.",
  },
  {
    title: "Ads shown during setup",
    body: "Monetization integrated too early. Users feel like a product, not a traveler. Trust destroyed at peak vulnerability.",
  },
];

const AFTER = [
  {
    title: "Progressive disclosure: 3 critical items shown first",
    body: "Scrollytelling-inspired progressive reveal. Each item unlocks with context. Remaining items collapsed until user is ready.",
  },
  {
    title: "Scroll-driven step-by-step guides",
    body: 'Each step opens on tap with screenshot, time estimate, and inline warning. Clear "Done" and "Trouble" actions always visible.',
  },
  {
    title: "Specific failure recovery with Agent escalation",
    body: '"Card declined" → shows exact fix (credit only, not debit) → Setup Agent offered after 2nd failure → human handoff at 3rd.',
  },
  {
    title: "Cinematic journey arc: problem → setup → triumph → explore",
    body: "The app tells a story. Completion screen celebrates the user. P1 Trip Planner is the reward for finishing P0 — not a separate product.",
  },
  {
    title: "Revenue deferred to trust-earned moments",
    body: "eSIM affiliate shown in setup (contextual, adds value). Restaurant sponsorship only after user has seen organic quality. No ads during setup wizard.",
  },
];

export function Compare() {
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
    <section className="compare" id="compare" ref={sectionRef}>
      <div className="compare-header reveal">
        <div className="compare-title">
          Before.<br /><em>After.</em>
        </div>
        <p className="compare-sub">What BIL-inspired thinking changed in the ChinaPass UX</p>
      </div>

      <div className="compare-grid">
        <div className="compare-col before reveal">
          <div className="compare-col-tag">Before — Standard Travel App</div>
          {BEFORE.map((item) => (
            <div key={item.title} className="compare-item">
              <div className="compare-marker">✗</div>
              <div>
                <div className="compare-item-title">{item.title}</div>
                <div className="compare-item-body">{item.body}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="compare-col after reveal reveal-delay-1">
          <div className="compare-col-tag">After — BIL-Inspired ChinaPass</div>
          {AFTER.map((item) => (
            <div key={item.title} className="compare-item">
              <div className="compare-marker">✓</div>
              <div>
                <div className="compare-item-title">{item.title}</div>
                <div className="compare-item-body">{item.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
