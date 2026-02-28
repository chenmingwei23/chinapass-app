import Link from "next/link";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
      </div>

      {/* Right-side stat strip */}
      <div className="hero-stat-strip">
        <div className="hero-stat">
          <div className="hero-stat-num">90%</div>
          <div className="hero-stat-label">Of China is cashless</div>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <div className="hero-stat-num">3,000+</div>
          <div className="hero-stat-label">Blocked websites</div>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <div className="hero-stat-num">1.4B</div>
          <div className="hero-stat-label">People. Few speak English.</div>
        </div>
      </div>

      <div className="hero-eyebrow">
        <div className="hero-eyebrow-line" />
        <div className="hero-eyebrow-text">Travel App · AI Guide</div>
        <div className="hero-flag">中国 · China</div>
      </div>

      <h1 className="hero-title">
        China<br />
        <span className="line-accent">without</span><br />
        <span className="line-red">the panic.</span>
      </h1>

      <p className="hero-sub">
        The first app that gets foreign travelers digitally ready for China — from payment apps
        to hidden restaurants — before and during the trip.
      </p>

      <div className="hero-actions">
        <a href="#solution" className="btn-hero-primary">
          See How It Works →
        </a>
        <Link href="/chat" className="btn-hero-ghost">
          <svg viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="19" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <polygon points="16,13 28,20 16,27" fill="rgba(255,255,255,0.6)" />
          </svg>
          Ask the AI Guide
        </Link>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}
