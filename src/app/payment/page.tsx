import Link from "next/link";
import { CheckCircle2, AlertTriangle, MessageSquare, CreditCard, Smartphone, Banknote } from "lucide-react";

const ALIPAY_STEPS = [
  {
    step: 1,
    title: "Download Alipay",
    detail: "Download from the App Store or Google Play. Available internationally. Use the same app as locals.",
  },
  {
    step: 2,
    title: "Register with your phone number",
    detail: "Use your home country phone number (+1, +44, +61, etc.). You'll receive an SMS verification code.",
  },
  {
    step: 3,
    title: "Tap 'International Card' in settings",
    detail: "Go to: Me → Bank Cards → Add Card → International Card. This is the foreigner-specific flow.",
  },
  {
    step: 4,
    title: "Enter your card details",
    detail: "Visa, Mastercard, American Express, and JCB are accepted. Enter card number, expiry, and CVV.",
  },
  {
    step: 5,
    title: "Verify your identity",
    detail: "Upload a photo of your passport. Processing takes 1–3 business days. Do this before your trip!",
  },
  {
    step: 6,
    title: "Set spending limits",
    detail: "International cards have a CNY 6,500/day limit (~$900 USD). Sufficient for most travelers.",
  },
  {
    step: 7,
    title: "Try a small payment",
    detail: "Scan any Alipay QR code to test. A convenience store is a safe first try.",
  },
];

const WECHAT_STEPS = [
  {
    step: 1,
    title: "Download WeChat and create account",
    detail: "Register with your foreign phone number. You may need an existing WeChat user to verify your account.",
  },
  {
    step: 2,
    title: "Go to 'Me' → Wallet → Cards",
    detail: "Tap your profile icon → Wallet → Debit/Credit Cards → Add Card.",
  },
  {
    step: 3,
    title: "Add an international card",
    detail: "WeChat Pay accepts Visa, Mastercard, JCB (in some regions). Enter your card details.",
  },
  {
    step: 4,
    title: "Verify your real name",
    detail: "WeChat requires 实名认证 (real name verification) using your passport for payments to work.",
  },
  {
    step: 5,
    title: "Set a WeChat Pay PIN",
    detail: "Choose a 6-digit PIN. This is required for every payment transaction.",
  },
  {
    step: 6,
    title: "Test with a small payment",
    detail: "Use 'Scan' → Scan a QR code. Alternatively, transfer ¥1 to a friend as a test.",
  },
];

const CASH_TIPS = [
  "ATMs that accept foreign cards: ICBC (工商银行), Bank of China (中国银行), HSBC. Look for the Visa/Mastercard logo.",
  "Exchange rates at Bank of China are usually the most competitive.",
  "Carry ¥500–¥1000 in small bills (¥10, ¥20, ¥50) as backup. Rural areas and street food stalls may be cash-only.",
  "Airport currency exchange has poor rates — just use an ATM once you land.",
  "Hotels and high-end restaurants often accept Visa/Mastercard directly.",
  "Tip: Charles Schwab and Wise debit cards have zero foreign transaction fees at ATMs.",
];

const SCENARIOS = [
  { place: "Street food / hawkers", method: "WeChat Pay or Alipay QR code", cash: true },
  { place: "Convenience stores (7-Eleven, FamilyMart)", method: "WeChat Pay, Alipay, or Cash", cash: true },
  { place: "Restaurants (mid-range)", method: "WeChat Pay or Alipay", cash: true },
  { place: "High-end restaurants & hotels", method: "International Visa/MC or mobile pay", cash: false },
  { place: "Taxis", method: "Cash (always safe), DiDi uses mobile pay", cash: true },
  { place: "Metro / subway", method: "Metro app (QR), WeChat/Alipay, or transit card", cash: false },
  { place: "Supermarkets", method: "WeChat Pay, Alipay, or Cash", cash: true },
  { place: "High-speed rail (高铁)", method: "Book via Trip.com, pay by card", cash: false },
];

export default function PaymentPage() {
  return (
    <div className="min-h-screen px-4 py-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/20 bg-emerald-400/5 text-emerald-400 text-xs font-medium mb-4">
          💳 Payment Guide
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">Paying in China as a Foreigner</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          China is nearly cashless, but foreigners can now use Alipay and WeChat Pay with international cards.
          Here&apos;s exactly how.
        </p>
      </div>

      {/* Warning banner */}
      <div className="flex items-start gap-3 px-4 py-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 mb-10">
        <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-yellow-300 text-sm font-semibold mb-1">Do this before you arrive</p>
          <p className="text-yellow-200/70 text-sm">
            Alipay identity verification takes 1–3 days. WeChat account creation may require a friend to verify you.
            Set these up at least a week before your trip.
          </p>
        </div>
      </div>

      {/* Overview cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
        {[
          {
            icon: Smartphone,
            title: "Alipay",
            sub: "Best for foreigners",
            desc: "Has a dedicated international card flow. Easiest for tourists.",
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20",
          },
          {
            icon: MessageSquare,
            title: "WeChat Pay",
            sub: "Most widely accepted",
            desc: "Required in many places. Works once you add an international card.",
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "border-green-400/20",
          },
          {
            icon: Banknote,
            title: "Cash (CNY ¥)",
            sub: "Always a backup",
            desc: "Carry ¥500–¥1000. Rural areas, markets, and some small shops still prefer it.",
            color: "text-yellow-400",
            bg: "bg-yellow-400/10",
            border: "border-yellow-400/20",
          },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`p-5 rounded-2xl border ${item.border} ${item.bg}`}
            >
              <Icon className={`w-6 h-6 ${item.color} mb-3`} />
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className={`text-xs font-medium ${item.color} mb-2`}>{item.sub}</p>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Alipay setup */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-2xl">💙</span> Setting Up Alipay
        </h2>
        <div className="flex flex-col gap-3">
          {ALIPAY_STEPS.map((s) => (
            <div
              key={s.step}
              className="flex gap-4 p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-blue-400/20 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-400/10 border border-blue-400/20 text-blue-400 text-sm font-bold flex items-center justify-center">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WeChat Pay setup */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span className="text-2xl">💚</span> Setting Up WeChat Pay
        </h2>
        <div className="flex flex-col gap-3">
          {WECHAT_STEPS.map((s) => (
            <div
              key={s.step}
              className="flex gap-4 p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-green-400/20 transition-colors"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-400/10 border border-green-400/20 text-green-400 text-sm font-bold flex items-center justify-center">
                {s.step}
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Where to pay / how */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6">Where & How to Pay</h2>
        <div className="rounded-2xl border border-white/8 overflow-hidden">
          <div className="grid grid-cols-3 px-4 py-3 bg-white/[0.03] border-b border-white/8 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            <span>Place</span>
            <span>Recommended Method</span>
            <span className="text-center">Cash OK?</span>
          </div>
          {SCENARIOS.map((s, i) => (
            <div
              key={s.place}
              className={`grid grid-cols-3 px-4 py-3 items-center text-sm ${
                i % 2 === 0 ? "bg-white/[0.01]" : ""
              } border-b border-white/5 last:border-0`}
            >
              <span className="text-gray-200">{s.place}</span>
              <span className="text-gray-400 text-xs pr-2">{s.method}</span>
              <span className="text-center">
                {s.cash ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mx-auto" />
                ) : (
                  <span className="text-gray-600 text-xs">—</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Cash tips */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <Banknote className="w-6 h-6 text-yellow-400" /> Cash & ATM Tips
        </h2>
        <div className="grid gap-3">
          {CASH_TIPS.map((tip) => (
            <div
              key={tip}
              className="flex items-start gap-3 px-4 py-3 rounded-lg border border-white/8 bg-white/[0.02]"
            >
              <CheckCircle2 className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-300 text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI help CTA */}
      <div className="gradient-border rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Have a specific payment question?</h2>
        <p className="text-gray-400 text-sm mb-5">
          The AI guide can walk you through any scenario — which card to use, what to do if payment fails, currency exchange tips, and more.
        </p>
        <Link
          href="/chat"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00d4ff] text-[#0a0f1e] font-semibold text-sm hover:bg-[#00d4ff]/90 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          Ask the AI Guide
        </Link>
      </div>
    </div>
  );
}
