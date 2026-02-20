import Link from "next/link";
import { MessageSquare, MapPin, ArrowRight, Clock, Star } from "lucide-react";

type City = {
  name: string;
  chinese: string;
  region: string;
  tagline: string;
  highlights: string[];
  bestFor: string[];
  duration: string;
  difficulty: "Easy" | "Moderate" | "Advanced";
  difficultyNote: string;
  emoji: string;
  color: string;
  border: string;
  bg: string;
};

const CITIES: City[] = [
  {
    name: "Shanghai",
    chinese: "上海",
    region: "East China",
    tagline: "The most foreigner-friendly city in China. A global metropolis with incredible food, nightlife, and architecture.",
    highlights: ["The Bund waterfront", "Yu Garden (豫园)", "French Concession", "Xintiandi", "Pudong skyline"],
    bestFor: ["First-timers", "Foodies", "Nightlife", "Shopping"],
    duration: "3–5 days",
    difficulty: "Easy",
    difficultyNote: "Most signs in English, many English-speaking locals, widely accepted Alipay/WeChat.",
    emoji: "🌆",
    color: "text-[#00d4ff]",
    border: "border-[#00d4ff]/20",
    bg: "bg-[#00d4ff]/5",
  },
  {
    name: "Beijing",
    chinese: "北京",
    region: "North China",
    tagline: "China's capital and cultural heart. Ancient temples, the Forbidden City, and one of the world's greatest walls.",
    highlights: ["Great Wall (八达岭 / 慕田峪)", "Forbidden City (故宫)", "Temple of Heaven", "Hutong alleys", "798 Art District"],
    bestFor: ["History lovers", "Culture", "Architecture", "Photography"],
    duration: "4–6 days",
    difficulty: "Moderate",
    difficultyNote: "Less English than Shanghai. Metro is easy; taxis may need Chinese characters. Pollution can be an issue.",
    emoji: "🏯",
    color: "text-red-400",
    border: "border-red-400/20",
    bg: "bg-red-400/5",
  },
  {
    name: "Chengdu",
    chinese: "成都",
    region: "Southwest China",
    tagline: "The land of giant pandas, spicy Sichuan food, and a famously laid-back lifestyle. A must-visit for food lovers.",
    highlights: ["Giant Panda Base (熊猫基地)", "Jinli Street", "Kuanzhai Alley (宽窄巷子)", "Leshan Giant Buddha (day trip)", "Hotpot dinners"],
    bestFor: ["Foodies", "Animal lovers", "Culture", "Day trips"],
    duration: "3–4 days",
    difficulty: "Moderate",
    difficultyNote: "Limited English outside tourist areas. Sichuan dialect can be hard even for Mandarin speakers.",
    emoji: "🐼",
    color: "text-emerald-400",
    border: "border-emerald-400/20",
    bg: "bg-emerald-400/5",
  },
  {
    name: "Xi'an",
    chinese: "西安",
    region: "Northwest China",
    tagline: "The ancient imperial capital and eastern terminus of the Silk Road. Home to the legendary Terracotta Army.",
    highlights: ["Terracotta Army (兵马俑)", "Ancient City Wall", "Muslim Quarter (回民街)", "Big Wild Goose Pagoda", "Huaqing Hot Springs"],
    bestFor: ["History", "Ancient China", "Street food", "Photography"],
    duration: "2–3 days",
    difficulty: "Moderate",
    difficultyNote: "Getting to Terracotta Army requires planning. Fewer English menus. Excellent local food scene.",
    emoji: "⚔️",
    color: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5",
  },
  {
    name: "Guilin",
    chinese: "桂林",
    region: "South China",
    tagline: "The most dramatic landscape in China. Karst mountains rising from rivers straight out of a Chinese ink painting.",
    highlights: ["Li River cruise (漓江)", "Yangshuo village", "Reed Flute Cave", "Longji Rice Terraces", "Elephant Trunk Hill"],
    bestFor: ["Nature", "Photography", "Adventure", "Cycling"],
    duration: "3–4 days",
    difficulty: "Easy",
    difficultyNote: "Very tourist-friendly. Li River cruise operators all speak English. Yangshuo has English signage everywhere.",
    emoji: "⛰️",
    color: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
  },
  {
    name: "Hangzhou",
    chinese: "杭州",
    region: "East China",
    tagline: "Heaven on Earth — as the Chinese proverb says. Famous for West Lake, dragon well tea, and silk.",
    highlights: ["West Lake (西湖)", "Longjing Tea Village (龙井)", "Lingyin Temple", "Qiantang River", "Song Dynasty Town"],
    bestFor: ["Nature", "Relaxation", "Culture", "Day trip from Shanghai"],
    duration: "1–2 days",
    difficulty: "Easy",
    difficultyNote: "Only 45 min by high-speed rail from Shanghai. Very pleasant for a day trip or overnight stay.",
    emoji: "🍵",
    color: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
  },
  {
    name: "Shenzhen",
    chinese: "深圳",
    region: "South China",
    tagline: "China's tech capital and innovation hub. 40 years ago it was a fishing village. Today it's a megacity of 13 million.",
    highlights: ["Window of the World theme park", "Dafen Oil Painting Village", "Huaqiangbei electronics market", "OCT Loft art district", "Border with Hong Kong"],
    bestFor: ["Tech enthusiasts", "Shopping", "Business travelers", "Weekend from HK"],
    duration: "1–2 days",
    difficulty: "Easy",
    difficultyNote: "Very modern and foreigner-friendly. Many residents speak English. Easy cross-border to Hong Kong.",
    emoji: "🏙️",
    color: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
  },
  {
    name: "Zhangjiajie",
    chinese: "张家界",
    region: "Central China",
    tagline: "The real-world Avatar mountains. Towering sandstone pillars disappearing into clouds — unlike anywhere on Earth.",
    highlights: ["Avatar Hallelujah Mountain", "Tianmen Mountain (天门山)", "Glass bridge walk", "Bailong Elevator (world's tallest outdoor lift)", "Zhangjiajie National Forest Park"],
    bestFor: ["Adventure", "Photography", "Nature", "Bucket list"],
    duration: "2–3 days",
    difficulty: "Advanced",
    difficultyNote: "Remote location. Limited English. Worth hiring a local guide. Fly from Changsha or direct from major cities.",
    emoji: "🗻",
    color: "text-orange-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
  },
];

const difficultyColor: Record<string, string> = {
  Easy: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  Moderate: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
  Advanced: "text-red-400 bg-red-400/10 border-red-400/20",
};

export default function CitiesPage() {
  return (
    <div className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-400/20 bg-orange-400/5 text-orange-400 text-xs font-medium mb-4">
          <MapPin className="w-3 h-3" />
          City Guide
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">Top Cities to Visit in China</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          From Beijing&apos;s ancient imperial sites to Shanghai&apos;s gleaming skyline — explore China&apos;s most compelling destinations with foreigner-friendly ratings and practical tips.
        </p>
        <Link
          href="/chat"
          className="inline-flex items-center gap-2 mt-5 text-sm text-[#00d4ff] hover:underline"
        >
          <MessageSquare className="w-4 h-4" />
          Get a custom AI itinerary for any city →
        </Link>
      </div>

      {/* City grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {CITIES.map((city) => (
          <div
            key={city.name}
            className={`rounded-2xl border ${city.border} bg-white/[0.02] overflow-hidden hover:border-opacity-50 transition-all group`}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${city.bg} border ${city.border} flex items-center justify-center text-xl flex-shrink-0`}>
                    {city.emoji}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 className="text-lg font-bold text-white">{city.name}</h2>
                      <span className="text-gray-500 text-sm">{city.chinese}</span>
                    </div>
                    <p className="text-xs text-gray-500">{city.region}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                  <span className={`px-2 py-0.5 rounded-full border text-xs font-medium ${difficultyColor[city.difficulty]}`}>
                    {city.difficulty}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {city.duration}
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">{city.tagline}</p>

              {/* Highlights */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Top highlights</p>
                <div className="flex flex-wrap gap-1.5">
                  {city.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/8 text-gray-300 text-xs"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Best for */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Best for</p>
                <div className="flex flex-wrap gap-1.5">
                  {city.bestFor.map((b) => (
                    <span
                      key={b}
                      className={`px-2.5 py-1 rounded-lg border text-xs font-medium ${city.border} ${city.bg} ${city.color}`}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Difficulty note */}
              <div className="flex items-start gap-2 px-3 py-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                <Star className="w-3.5 h-3.5 text-gray-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-500 text-xs leading-relaxed">{city.difficultyNote}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-white/5 px-6 py-3 bg-white/[0.01] flex items-center justify-between">
              <span className="text-xs text-gray-600">AI itinerary builder coming soon</span>
              <Link
                href={`/chat?q=Build me a ${city.duration.split("–")[0]}-day itinerary for ${city.name} (${city.chinese}) as a foreign tourist`}
                className={`inline-flex items-center gap-1.5 text-xs ${city.color} hover:underline`}
              >
                <MessageSquare className="w-3 h-3" />
                Plan with AI
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* AI CTA */}
      <div className="mt-16 gradient-border rounded-2xl p-8 text-center">
        <h2 className="text-xl font-bold text-white mb-2">Not sure where to go?</h2>
        <p className="text-gray-400 text-sm mb-5">
          Tell the AI your travel style, budget, and timeframe — it will recommend the best cities and build you a day-by-day itinerary.
        </p>
        <Link
          href="/chat?q=I'm planning a trip to China. Can you help me decide which cities to visit based on my interests?"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#00d4ff] text-[#0a0f1e] font-semibold text-sm hover:bg-[#00d4ff]/90 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          Help me choose a city
        </Link>
      </div>
    </div>
  );
}
