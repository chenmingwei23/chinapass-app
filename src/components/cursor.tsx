"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Add cursor:none to body while mounted
    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
      ring.style.left = e.clientX + "px";
      ring.style.top = e.clientY + "px";
    };

    const onEnter = () => {
      dot.style.width = "20px";
      dot.style.height = "20px";
      ring.style.width = "52px";
      ring.style.height = "52px";
    };
    const onLeave = () => {
      dot.style.width = "10px";
      dot.style.height = "10px";
      ring.style.width = "36px";
      ring.style.height = "36px";
    };

    document.addEventListener("mousemove", onMove);

    // Attach hover effects to interactive elements
    const interactables = document.querySelectorAll<HTMLElement>(
      "button, a, .screen-card, .fr-tier, .pr-card"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", onMove);
      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
