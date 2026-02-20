import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageSquare, CheckCircle2, AlertTriangle, ChevronRight } from "lucide-react";
import { APPS, getAppBySlug } from "@/lib/apps-data";

export async function generateStaticParams() {
  return APPS.filter((a) => a.setupSteps).map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};
  return {
    title: `${app.name} Setup Guide for Foreigners — ChinaPass`,
    description: `Step-by-step guide to setting up ${app.name} (${app.chinese}) as a foreign tourist in China. In English.`,
  };
}

export default async function AppDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || !app.setupSteps) {
    notFound();
  }

  // Find adjacent apps for prev/next navigation
  const appsWithSteps = APPS.filter((a) => a.setupSteps);
  const currentIndex = appsWithSteps.findIndex((a) => a.slug === slug);
  const prevApp = currentIndex > 0 ? appsWithSteps[currentIndex - 1] : null;
  const nextApp = currentIndex < appsWithSteps.length - 1 ? appsWithSteps[currentIndex + 1] : null;

  return (
    <div className="min-h-screen px-4 py-12 max-w-3xl mx-auto">
      {/* Back link */}
      <Link
        href="/apps"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        All Apps
      </Link>

      {/* App header */}
      <div className="flex items-start gap-5 mb-8">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl flex-shrink-0">
          {app.emoji}
        </div>
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h1 className="text-3xl font-bold text-white">{app.name}</h1>
            <span className="text-gray-500">{app.chinese}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
              {app.category}
            </span>
            <span className="text-xs text-gray-500">Western equivalent: {app.westernEquiv}</span>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="mb-8">
        <p className="text-gray-300 leading-relaxed mb-3">{app.desc}</p>
        <div className="flex items-start gap-2 px-4 py-3 rounded-xl bg-[#00d4ff]/5 border border-[#00d4ff]/15">
          <span className="text-[#00d4ff] text-sm font-semibold whitespace-nowrap mt-0.5">WHY YOU NEED IT</span>
          <p className="text-gray-300 text-sm">{app.why}</p>
        </div>
      </div>

      {/* Warning banner if present */}
      {app.warningNote && (
        <div className="flex items-start gap-3 px-4 py-4 rounded-xl border border-yellow-400/20 bg-yellow-400/5 mb-8">
          <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-yellow-300 text-sm font-semibold mb-0.5">Important note</p>
            <p className="text-yellow-200/70 text-sm">{app.warningNote}</p>
          </div>
        </div>
      )}

      {/* Step-by-step setup */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
          <span className={`${app.color}`}>●</span>
          Step-by-step setup
        </h2>
        <div className="flex flex-col gap-3">
          {app.setupSteps.map((step, i) => (
            <div
              key={i}
              className="flex gap-4 p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/15 transition-colors"
            >
              <div
                className={`flex-shrink-0 w-8 h-8 rounded-full border text-sm font-bold flex items-center justify-center`}
                style={{ color: "inherit" }}
              >
                <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border ${app.color} bg-white/5 border-white/15`}>
                  {i + 1}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm mb-1">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tips */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-5">Pro tips</h2>
        <div className="flex flex-col gap-2">
          {app.tips.map((tip) => (
            <div
              key={tip}
              className="flex items-start gap-3 px-4 py-3 rounded-lg border border-white/8 bg-white/[0.02]"
            >
              <CheckCircle2 className={`w-4 h-4 ${app.color} flex-shrink-0 mt-0.5`} />
              <p className="text-gray-300 text-sm">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI help */}
      <div className="gradient-border rounded-2xl p-6 mb-10 text-center">
        <h2 className="text-lg font-bold text-white mb-2">Have a specific question about {app.name}?</h2>
        <p className="text-gray-400 text-sm mb-4">
          The AI guide can walk you through any step, troubleshoot issues, and answer edge cases.
        </p>
        <Link
          href={`/chat?q=I need help setting up ${app.name} (${app.chinese}) as a foreigner. Can you walk me through it?`}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00d4ff] text-[#0a0f1e] font-semibold text-sm hover:bg-[#00d4ff]/90 transition-all"
        >
          <MessageSquare className="w-4 h-4" />
          Ask the AI about {app.name}
        </Link>
      </div>

      {/* Prev/Next navigation */}
      <div className="flex items-center justify-between gap-4 pt-6 border-t border-white/5">
        {prevApp ? (
          <Link
            href={`/apps/${prevApp.slug}`}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{prevApp.emoji} {prevApp.name}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextApp ? (
          <Link
            href={`/apps/${nextApp.slug}`}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <span>{nextApp.emoji} {nextApp.name}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
