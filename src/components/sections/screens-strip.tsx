"use client";

import { useRef, useState } from "react";

const CARD_WIDTH = 280 + 24; // width + gap

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-display">{children}</div>
    </div>
  );
}

function ScreenSplash() {
  return (
    <div className="s-splash">
      <div className="s-splash-flag">🇨🇳</div>
      <div className="s-splash-brand">China<span>Pass</span></div>
      <div className="s-splash-sub">Your complete digital guide<br />for traveling to China</div>
      <button className="s-splash-btn">Get Ready for China →</button>
      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "10px" }}>
        Already set up? Sign in
      </div>
    </div>
  );
}

function ScreenSetup() {
  return (
    <div className="s-setup">
      <div className="s-setup-header">
        <div className="s-setup-greeting">Good morning, Alex</div>
        <div className="s-setup-title">Your China Prep List</div>
        <div className="s-progress-row">
          <div className="s-progress-bar"><div className="s-progress-fill" style={{ width: "37%" }} /></div>
          <div className="s-progress-text">3/8</div>
        </div>
        <div className="s-trip-chip">✈️ Beijing → Shanghai · Apr 12–24 · 30 days to go</div>
      </div>
      <div className="s-setup-body">
        <div className="s-section-label">🔴 Must Complete</div>
        <div className="s-item done">
          <div className="s-item-icon">💳</div>
          <div className="s-item-body"><div className="s-item-name">Alipay</div><div className="s-item-meta">⏱ 10 min</div></div>
          <span className="s-item-badge badge-d">Done ✓</span>
        </div>
        <div className="s-item active">
          <div className="s-item-icon">💬</div>
          <div className="s-item-body"><div className="s-item-name">WeChat Pay</div><div className="s-item-meta">⏱ 8 min</div></div>
          <span className="s-item-badge badge-a">Active</span>
        </div>
        <div className="s-item error">
          <div className="s-item-icon">📡</div>
          <div className="s-item-body"><div className="s-item-name">eSIM Setup</div><div className="s-item-meta">⏱ 5 min</div></div>
          <span className="s-item-badge badge-e">⚠ Issue</span>
        </div>
        <div className="s-item">
          <div className="s-item-icon">🔐</div>
          <div className="s-item-body"><div className="s-item-name">VPN Setup</div><div className="s-item-meta">⏱ 5 min</div></div>
          <span className="s-item-badge badge-r">Recom.</span>
        </div>
        <div className="s-section-label" style={{ marginTop: "10px" }}>🟡 Also Important</div>
        <div className="s-item done">
          <div className="s-item-icon">🚕</div>
          <div className="s-item-body"><div className="s-item-name">Didi</div><div className="s-item-meta">⏱ 4 min</div></div>
          <span className="s-item-badge badge-d">Done ✓</span>
        </div>
        <div className="s-item done">
          <div className="s-item-icon">🗺️</div>
          <div className="s-item-body"><div className="s-item-name">Amap</div><div className="s-item-meta">⏱ 3 min</div></div>
          <span className="s-item-badge badge-d">Done ✓</span>
        </div>
      </div>
    </div>
  );
}

function ScreenGuide() {
  return (
    <div className="s-guide">
      <div className="s-guide-header">
        <div className="s-guide-back">← Checklist</div>
        <div className="s-guide-row">
          <div className="s-guide-appicon">💳</div>
          <div>
            <div className="s-guide-appname">Alipay Setup</div>
            <div className="s-guide-appsub">支付宝 · Primary payment</div>
          </div>
        </div>
        <div className="s-guide-chips">
          <div className="s-guide-chip">⏱ 10 min</div>
          <div className="s-guide-chip">✅ Feb 2026</div>
          <div className="s-guide-chip">🔴 Required</div>
        </div>
      </div>
      <div className="s-guide-body">
        <div className="s-guide-alert">
          <span>⚠️ <strong>Credit cards only.</strong> Alipay rejects debit cards and AmEx.</span>
        </div>
        <div className="s-step done"><div className="s-step-header"><div className="s-step-num">✓</div><div className="s-step-title">Download Alipay International</div></div></div>
        <div className="s-step done"><div className="s-step-header"><div className="s-step-num">✓</div><div className="s-step-title">Register with phone number</div></div></div>
        <div className="s-step active">
          <div className="s-step-header">
            <div className="s-step-num">3</div>
            <div className="s-step-title">Link your credit card</div>
            <span style={{ fontSize: "11px", color: "#1B3F72" }}>▼</span>
          </div>
          <div className="s-step-body" style={{ paddingTop: "8px" }}>
            Tap <strong>Me → Bank Cards → +</strong>. Enter Visa or Mastercard details.
          </div>
        </div>
        <div className="s-step"><div className="s-step-header"><div className="s-step-num">4</div><div className="s-step-title">Upload ID for higher limits</div></div></div>
      </div>
      <div className="s-guide-footer">
        <button className="s-guide-cta">✓ Step 3 Done — Continue</button>
      </div>
    </div>
  );
}

function ScreenTrip() {
  return (
    <div className="s-trip">
      <div className="s-trip-header"><div className="s-trip-title">My Trips</div></div>
      <div className="s-trip-body">
        <div className="s-trip-card">
          <div className="s-trip-map">
            <div className="s-trip-city">Beijing</div>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>→</span>
            <div className="s-trip-city">Xi&apos;an</div>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>→</span>
            <div className="s-trip-city">Shanghai</div>
          </div>
          <div className="s-trip-body2">
            <div className="s-trip-name">China Golden Route</div>
            <div className="s-trip-meta">
              <div className="s-trip-date">Apr 12–24, 2026</div>
              <div className="s-trip-status">Upcoming</div>
            </div>
          </div>
          <div className="s-trip-offline">✅ Offline ready · Apr 3</div>
        </div>
        <div className="s-trip-card">
          <div className="s-trip-map" style={{ background: "linear-gradient(135deg,#2D1B69,#4C1D95)" }}>
            <div className="s-trip-city">Chengdu</div>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>→</span>
            <div className="s-trip-city">Chongqing</div>
          </div>
          <div className="s-trip-body2">
            <div className="s-trip-name">Sichuan Food Trip</div>
            <div className="s-trip-meta">
              <div className="s-trip-date">Aug 8–15, 2026</div>
              <div className="s-trip-status" style={{ background: "#DCFCE7", color: "#18794E" }}>Planning</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenTranslate() {
  return (
    <div className="s-translate">
      <div className="s-trans-header">
        <div className="s-trans-title">Translate</div>
        <div className="s-trans-toggle">
          <div className="s-trans-mode on">📷 Cam</div>
          <div className="s-trans-mode">⌨️ Text</div>
        </div>
      </div>
      <div className="s-viewfinder">
        <div className="scan-c tl" /><div className="scan-c tr" />
        <div className="scan-c bl" /><div className="scan-c br" />
        <div className="s-viewfinder-zh">夫妻肺片</div>
      </div>
      <div className="s-result">
        <div className="s-result-header">
          <span>Result</span><span>🟢 High confidence</span>
        </div>
        <div className="s-result-body">
          <div className="s-translation">Husband &amp; Wife Beef Slices</div>
          <div className="s-pinyin">fū qī fèi piàn</div>
          <div className="s-context">Classic Sichuan cold dish — spiced beef in chili oil. Numbing heat. One of Chengdu&apos;s most famous dishes.</div>
          <div className="s-allergens">
            <div className="s-allergen al-peanut">⚠️ Peanuts</div>
            <div className="s-allergen al-spicy">🌶️ Very Spicy</div>
          </div>
        </div>
      </div>
      <div className="s-trans-footer">
        <button className="s-trans-btn">🔊 Pronounce</button>
        <button className="s-trans-btn primary">📋 Add to Trip</button>
      </div>
    </div>
  );
}

function ScreenAgent() {
  return (
    <div className="s-agent">
      <div className="s-agent-header">
        <div className="s-agent-avatar">🍜</div>
        <div>
          <div className="s-agent-name">Restaurant Agent</div>
          <div className="s-agent-status">● Online · Beijing</div>
        </div>
      </div>
      <div className="s-agent-messages">
        <div className="s-msg user">
          <div className="s-bubble">Near Wangfujing, authentic food under ¥150. I have Alipay.</div>
        </div>
        <div className="s-msg assistant">
          <div className="s-agent-avatar" style={{ width: "24px", height: "24px", fontSize: "11px", flexShrink: 0 }}>🍜</div>
          <div className="s-bubble">
            3 great picks nearby — all Alipay-ready:
            <div className="s-rec-card">
              <div className="s-rec-name">Siji Minfu Roast Duck</div>
              <div className="s-rec-zh">四季民福烤鸭店</div>
              <div className="s-rec-chips">
                <div className="s-rec-chip" style={{ background: "#DCFCE7", color: "#18794E" }}>Alipay ✓</div>
                <div className="s-rec-chip" style={{ background: "#FEF3C7", color: "#B45309" }}>¥80–120</div>
                <div className="s-rec-chip" style={{ background: "#EBF4FF", color: "#1B3F72" }}>★★★★★</div>
              </div>
            </div>
            <div className="s-rec-card" style={{ marginTop: "6px" }}>
              <div className="s-rec-name">Bianyifang (since 1416)</div>
              <div className="s-rec-zh">便宜坊 · Oldest duck restaurant</div>
              <div className="s-rec-chips">
                <div className="s-rec-chip" style={{ background: "#DCFCE7", color: "#18794E" }}>Alipay ✓</div>
                <div className="s-rec-chip" style={{ background: "#FEF3C7", color: "#B45309" }}>¥100–140</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-agent-input">
        <input type="text" placeholder="Ask about restaurants..." readOnly />
        <div className="s-agent-send">→</div>
      </div>
    </div>
  );
}

const CARDS = [
  { phase: "P0 · Setup", phaseClass: "phase-p0", label: "Welcome Screen", content: <ScreenSplash /> },
  { phase: "P0 · Setup", phaseClass: "phase-p0", label: "Setup Checklist", content: <ScreenSetup /> },
  { phase: "P0 · Setup", phaseClass: "phase-p0", label: "Step-by-Step Guide", content: <ScreenGuide /> },
  { phase: "P1 · Companion", phaseClass: "phase-p1", label: "Trip Planner", content: <ScreenTrip /> },
  { phase: "P1 · Companion", phaseClass: "phase-p1", label: "Camera Translation", content: <ScreenTranslate /> },
  { phase: "P2 · AI Agent", phaseClass: "phase-p2", label: "Restaurant Agent", content: <ScreenAgent /> },
];

export function ScreensStrip() {
  const [scrollPos, setScrollPos] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - (track.parentElement?.offsetWidth ?? 0);
    setScrollPos((p) => Math.min(p + CARD_WIDTH * 2, max));
  };
  const scrollLeft = () => {
    setScrollPos((p) => Math.max(p - CARD_WIDTH * 2, 0));
  };

  return (
    <section className="screens-strip" id="screens">
      <div className="ss-header">
        <div>
          <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: "12px" }}>
            03 — App Screens
          </div>
          <h2 className="ss-title">Every screen,<br /><em>designed to calm.</em></h2>
        </div>
        <div className="ss-nav">
          <button className="ss-nav-btn" onClick={scrollLeft}>‹</button>
          <button className="ss-nav-btn" onClick={scrollRight}>›</button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="screens-track"
        style={{ transform: `translateX(-${scrollPos}px)` }}
      >
        {CARDS.map((card, i) => (
          <div key={i} className="screen-card">
            <div className={`screen-card-phase ${card.phaseClass}`}>{card.phase}</div>
            <div className="screen-card-label">{card.label}</div>
            <PhoneFrame>{card.content}</PhoneFrame>
          </div>
        ))}
      </div>
    </section>
  );
}
