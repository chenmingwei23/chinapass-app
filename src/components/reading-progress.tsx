"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      if (total > 0) setWidth((window.scrollY / total) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="reading-progress" style={{ width: `${width}%` }} />;
}
