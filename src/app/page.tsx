import Link from "next/link";
import { MessageSquare, Smartphone, CreditCard, Map, ArrowRight, BookOpen } from "lucide-react";

const FEATURES = [
  {
    icon: MessageSquare,
    label: "AI Guide",
    desc: "Ask anything, get answers",
    href: "/chat",
  },
  {
    icon: Smartphone,
    label: "App Navigator",
    desc: "15 apps, English setup guides",
    href: "/apps",
  },
  {
    icon: CreditCard,
    label: "Payment Guide",
    desc: "Link your foreign card",
    href: "/payment",
  },
  {
    icon: Map,
    label: "City Guide",
    desc: "8 cities with AI itineraries",
    href: "/cities",
  },
  {
    icon: BookOpen,
    label: "Essentials",
    desc: "Visa, SIM, emergency info",
    href: "/essentials",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[calc(100vh-56px)] px-4 text-center overflow-hidden">

      {/* ── China flag atmospheric background ── */}
      <div className="absolute inset-0 -z-10">
        {/* Deep red radial centre glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(222,41,16,0.18) 0%, rgba(222,41,16,0.05) 45%, transparent 70%)" }}
        />
        {/* Gold top shimmer */}
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(255,222,0,0.07) 0%, transparent 65%)" }}
        />
        {/* Subtle red edge vignette */}
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, transparent 40%, rgba(100,8,0,0.4) 100%)" }}
        />
      </div>

      {/* ── Tag ── */}
      <div className="flex items-center gap-2 mb-10">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFDE00]" />
        <p className="text-[11px] font-mono tracking-[0.2em] uppercase" style={{ color: "rgba(255,222,0,0.6)" }}>
          ChinaPass · v0.1 beta
        </p>
      </div>

      {/* ── Headline ── */}
      <h1 className="text-[clamp(4rem,10vw,7rem)] font-bold tracking-tight leading-none mb-5">
        <span className="text-white">China,</span>{" "}
        <span style={{ color: "#DE2910" }}>decoded.</span>
      </h1>

      {/* ── Subtext ── */}
      <p className="text-[15px] max-w-sm leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
        Apps, payments, maps, and transport —
        everything foreign visitors struggle with, explained in English.
      </p>

      {/* ── CTAs ── */}
      <div className="flex items-center gap-4 mb-16">
        <Link
          href="/chat"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold text-sm transition-all hover:opacity-90 active:scale-95"
          style={{ background: "#DE2910", color: "#fff", boxShadow: "0 0 24px rgba(222,41,16,0.4)" }}
        >
          <MessageSquare className="w-4 h-4" />
          Ask the AI
        </Link>
        <Link
          href="/essentials"
          className="inline-flex items-center gap-1.5 text-sm transition-colors text-[rgba(255,222,0,0.5)] hover:text-[rgba(255,222,0,0.9)]"
        >
          Before you go <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* ── Feature strip ── */}
      <div
        className="w-full max-w-3xl rounded-xl overflow-hidden"
        style={{ border: "1px solid rgba(222,41,16,0.15)" }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5" style={{ background: "rgba(222,41,16,0.04)" }}>
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <Link
                key={f.label}
                href={f.href}
                className="group flex flex-col items-center gap-2.5 px-4 py-5 transition-all duration-150 hover:bg-[rgba(222,41,16,0.08)]"
                style={{
                  borderRight: i < FEATURES.length - 1 ? "1px solid rgba(222,41,16,0.1)" : "none",
                }}
              >
                <Icon className="w-4 h-4" style={{ color: "#DE2910" }} />
                <div>
                  <p className="text-white text-xs font-semibold">{f.label}</p>
                  <p className="text-[11px] mt-0.5 leading-tight" style={{ color: "rgba(255,255,255,0.3)" }}>{f.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <p className="text-xs mt-5" style={{ color: "rgba(255,255,255,0.15)" }}>
        Free · No sign-up required
      </p>
    </div>
  );
}
