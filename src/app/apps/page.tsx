import Link from "next/link";
import { ExternalLink, MessageSquare } from "lucide-react";
import { APPS } from "@/lib/apps-data";

export default function AppsPage() {
  return (
    <div className="min-h-screen px-4 py-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-400/20 bg-purple-400/5 text-purple-400 text-xs font-medium mb-4">
          📱 App Navigator
        </div>
        <h1 className="text-4xl font-bold text-white mb-3">Essential Apps for China</h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          The complete guide to setting up the {APPS.length} apps you need before and after landing in China.
          All setup instructions are in English.
        </p>
        <Link
          href="/chat"
          className="inline-flex items-center gap-2 mt-5 text-sm text-[#00d4ff] hover:underline"
        >
          <MessageSquare className="w-4 h-4" />
          Need help setting up an app? Ask the AI →
        </Link>
      </div>

      {/* App cards */}
      <div className="flex flex-col gap-5">
        {APPS.map((app, i) => (
          <div
            key={app.name}
            className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden hover:border-white/15 transition-colors"
          >
            <div className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Icon / number */}
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                  {app.emoji}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Name row */}
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-lg font-bold text-white">{app.name}</h2>
                    <span className="text-gray-500 text-sm">{app.chinese}</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                      {app.category}
                    </span>
                    <span className="text-xs text-gray-500">
                      ≈ {app.westernEquiv}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-2">{app.desc}</p>

                  {/* Why you need it */}
                  <div className="flex items-start gap-2 mb-4 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
                    <span className="text-[#00d4ff] text-xs font-semibold mt-0.5 whitespace-nowrap">WHY</span>
                    <p className="text-gray-400 text-xs">{app.why}</p>
                  </div>

                  {/* Tips */}
                  <div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Setup tips
                    </p>
                    <ul className="space-y-1.5">
                      {app.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${app.color}`} />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer action */}
            <div className="border-t border-white/5 px-6 py-3 bg-white/[0.01] flex items-center justify-between">
              <span className="text-xs text-gray-600">#{i + 1} on the must-install list</span>
              <div className="flex items-center gap-3">
                {app.setupSteps && (
                  <Link
                    href={`/apps/${app.slug}`}
                    className={`inline-flex items-center gap-1.5 text-xs ${app.color} hover:underline`}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Full setup guide
                  </Link>
                )}
                <Link
                  href={`/chat?q=How do I set up ${app.name} (${app.chinese}) as a foreigner in China?`}
                  className="inline-flex items-center gap-1.5 text-xs text-[#00d4ff] hover:underline"
                >
                  <MessageSquare className="w-3 h-3" />
                  Get AI help
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center gradient-border rounded-2xl p-8">
        <h2 className="text-xl font-bold text-white mb-2">Still confused?</h2>
        <p className="text-gray-400 text-sm mb-5">
          Ask the AI guide step-by-step setup questions for any app. It knows every detail.
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
