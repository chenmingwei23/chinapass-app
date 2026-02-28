import { Cursor } from "@/components/cursor";
import { ReadingProgress } from "@/components/reading-progress";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Scrollytell } from "@/components/sections/scrollytell";
import { FeatureReveal } from "@/components/sections/feature-reveal";
import { ScreensStrip } from "@/components/sections/screens-strip";
import { Principles } from "@/components/sections/principles";
import { Compare } from "@/components/sections/compare";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <ReadingProgress />
      <Navbar />
      <main>
        <Hero />
        <Scrollytell />
        <FeatureReveal />
        <ScreensStrip />
        <Principles />
        <Compare />
      </main>
      <Footer />
    </>
  );
}
