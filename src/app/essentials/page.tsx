import Link from "next/link";
import { MessageSquare, Phone, Wifi, CreditCard, Plane, BookOpen } from "lucide-react";

const SECTIONS = [
  {
    icon: Plane,
    title: "Visa Requirements",
    color: "text-blue-400",
    items: [
      { q: "Do I need a visa?", a: "Depends on your nationality. 54+ countries now have 15-day visa-free entry to China (2024 policy). Check the Chinese embassy website for your country." },
      { q: "Visa-free countries include", a: "France, Germany, Italy, Spain, Netherlands, Switzerland, Ireland, Hungary, Austria, Belgium, Luxembourg, Australia, New Zealand, and many more. The US currently requires a visa." },
      { q: "L Visa (Tourist)", a: "Single or double entry, 30–90 days. Apply at your nearest Chinese consulate or embassy 4–6 weeks before travel." },
      { q: "Transit without visa", a: "Many nationalities can transit through Shanghai, Beijing, or Guangzhou for 144 hours without a visa if continuing to a third country." },
    ],
  },
  {
    icon: Wifi,
    title: "Connectivity & SIM Cards",
    color: "text-purple-400",
    items: [
      { q: "Buy a SIM at the airport", a: "China Unicom and China Telecom sell tourist SIM cards at most international airports. Bring your passport. Plans start from ¥50–¥100 for 7–30 days of data." },
      { q: "Which carrier to choose?", a: "China Unicom has the best English support for foreigners. China Telecom has slightly better rural coverage. Both use 5G in major cities." },
      { q: "Does my home plan work?", a: "International roaming works in China but is expensive. Data is throttled or blocked for many services. A local SIM is strongly recommended." },
      { q: "Portable WiFi rental", a: "Available at airports (Changi, Narita, etc.) before departure. Convenient if you are sharing with travel partners." },
      { q: "VPN situation", a: "Google, Instagram, YouTube, WhatsApp, and most Western services are blocked in China. A VPN can unblock them but use reputable providers. Download and test before arriving — VPN websites are blocked inside China." },
    ],
  },
  {
    icon: CreditCard,
    title: "Money & Budget",
    color: "text-emerald-400",
    items: [
      { q: "Currency", a: "Chinese Yuan (CNY / RMB ¥). 1 USD ≈ 7.2 CNY, 1 EUR ≈ 7.8 CNY (rates fluctuate). Use Wise or check XE.com for current rates." },
      { q: "Budget per day", a: "Budget traveler: ¥200–400/day. Mid-range: ¥500–1000/day. Comfortable: ¥1000+/day. Accommodation is the biggest variable." },
      { q: "Tipping", a: "Do NOT tip in China. It is not customary and can sometimes cause confusion or offense. Upscale hotel service is an exception." },
      { q: "Bargaining", a: "Expected at markets and street stalls. Not appropriate in malls, chain restaurants, or apps. Start at 30–50% of the asking price." },
    ],
  },
  {
    icon: Phone,
    title: "Emergency Contacts",
    color: "text-red-400",
    items: [
      { q: "Police", a: "110 — for robbery, emergencies, reporting incidents" },
      { q: "Ambulance", a: "120 — medical emergencies" },
      { q: "Fire", a: "119 — fire, gas leaks" },
      { q: "Lost Passport", a: "Contact your embassy immediately. In Beijing: US Embassy +86-10-8531-3000, UK Embassy +86-10-5192-4000. Keep a photo of your passport on your phone." },
      { q: "Lost in translation", a: "Ask your hotel for help — hotels always have English-speaking staff who can call services on your behalf." },
    ],
  },
  {
    icon: BookOpen,
    title: "Cultural Tips",
    color: "text-orange-400",
    items: [
      { q: "Queuing", a: "Queuing norms are less strict than in Western countries, especially at busy transit hubs. Be patient and assertive." },
      { q: "Noise levels", a: "Public spaces and restaurants can be much noisier than you are used to. This is normal and not considered rude." },
      { q: "Taking photos", a: "Always ask permission before photographing people. Military and government buildings are typically off-limits for photos." },
      { q: "Eating etiquette", a: "Sharing dishes is standard. Use the communal serving chopsticks (公筷) if provided. It is fine to eat directly from serving bowls." },
      { q: "Giving gifts", a: "Never give clocks (送钟 sounds like 'attending a funeral'), pears (梨 sounds like 'separate'), or shoes (implies asking someone to leave)." },
      { q: "Face masks", a: "Still common in crowded areas. Not mandatory but bringing a pack shows consideration." },
    ],
  },
];

export default function EssentialsPage() {
  return (
    <div className="min-h-screen px-4 py-12 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 text-orange-400 text-xs font-medium mb-4">
          ✈️ Travel Essentials
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">Before You Go to China</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Everything you need to know before landing — visa, connectivity, money, emergency contacts, and cultural tips.
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-10">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <section key={section.title}>
              <h2 className={`text-xl font-bold text-white mb-5 flex items-center gap-2`}>
                <Icon className={`w-5 h-5 ${section.color}`} />
                {section.title}
              </h2>
              <div className="flex flex-col gap-3">
                {section.items.map((item) => (
                  <div
                    key={item.q}
                    className="rounded-xl border border-white/8 bg-white/[0.02] px-5 py-4"
                  >
                    <p className="text-sm font-semibold text-white mb-1">{item.q}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      {/* AI CTA */}
      <div className="mt-14 gradient-border rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Questions about your specific trip?</h2>
        <p className="text-gray-400 text-sm mb-5">
          The AI guide can answer questions specific to your nationality, destination city, travel dates, and budget.
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
