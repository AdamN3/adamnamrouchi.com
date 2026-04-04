"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*+-=_?/<>[]{}";

type HeroNameScrambleProps = {
  text?: string;
  className?: string;
};

export default function HeroNameScramble({
  text = "Adam Namrouchi",
  className = "",
}: HeroNameScrambleProps) {
  const chars = useMemo(() => [...text], [text]);
  const charRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  const resetToOriginal = useCallback(() => {
    timelineRef.current?.kill();
    timelineRef.current = null;
    chars.forEach((char, i) => {
      const el = charRefs.current[i];
      if (!el) return;
      el.textContent = char === " " ? "\u00A0" : char;
    });
  }, [chars]);

  const playScramble = useCallback(() => {
    timelineRef.current?.kill();

    const tl = gsap.timeline();
    timelineRef.current = tl;

    const scrambleSteps = 12;
    const stepGap = 0.026;
    const letterStagger = 0.032;

    chars.forEach((char, i) => {
      if (char === " ") return;
      const el = charRefs.current[i];
      if (!el) return;

      const t0 = i * letterStagger;

      for (let s = 0; s < scrambleSteps; s++) {
        tl.call(
          () => {
            el.textContent =
              GLYPHS[Math.floor(Math.random() * GLYPHS.length)] ?? "?";
          },
          undefined,
          t0 + s * stepGap,
        );
      }

      tl.call(() => {
        el.textContent = char;
      }, undefined, t0 + scrambleSteps * stepGap);
    });
  }, [chars]);

  return (
    <h1
      className={`${className} flex flex-wrap justify-center cursor-pointer select-none`}
      onMouseEnter={playScramble}
      onMouseLeave={resetToOriginal}
    >
      {chars.map((char, i) => (
        <span
          key={`${i}-${char}`}
          ref={(el) => {
            charRefs.current[i] = el;
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
