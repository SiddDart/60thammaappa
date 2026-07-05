"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COUPLE_NAMES } from "@/config/scenes";
import { KolamDivider } from "./KolamDivider";

const TITLE_LINES = [
  { text: "Shashti Abda Poorthi", delay: 0.4, variant: "title" as const },
  { text: "Celebrating 60 years of togetherness", delay: 2.0, variant: "sub" as const },
  {
    text: `${COUPLE_NAMES.her} & ${COUPLE_NAMES.him}`,
    delay: 3.6,
    variant: "names" as const,
  },
  {
    text: "With the blessings of elders and the grace of Goddess Meenakshi",
    delay: 5.4,
    variant: "sub" as const,
  },
];

export function SkyIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Camera "pans down" into the house as the user scrolls past the sky.
  const skyScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);

  return (
    <section ref={ref} className="scene-container bg-ink" aria-label="Opening sky">
      <motion.div
        className="absolute inset-0"
        style={{ scale: skyScale, y: skyY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #2E1A22 0%, #6B3A3A 22%, #C97A4A 48%, #E29A66 68%, #F3D9A6 100%)",
          }}
        />
        {/* Drifting cloud silhouettes */}
        <svg
          className="absolute inset-0 h-full w-full opacity-40 animate-drift-slow"
          viewBox="0 0 1000 600"
          preserveAspectRatio="xMidYMid slice"
        >
          <ellipse cx="150" cy="140" rx="180" ry="26" fill="#F3EBDA" opacity="0.25" />
          <ellipse cx="620" cy="90" rx="240" ry="30" fill="#F3EBDA" opacity="0.2" />
          <ellipse cx="850" cy="220" rx="160" ry="22" fill="#F3EBDA" opacity="0.18" />
          <ellipse cx="380" cy="260" rx="220" ry="28" fill="#F3EBDA" opacity="0.15" />
        </svg>
        {/* Floating particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 22 }).map((_, i) => (
            <span
              key={i}
              className="absolute block rounded-full bg-lamp-glow"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${20 + ((i * 53) % 70)}%`,
                width: i % 3 === 0 ? "3px" : "1.5px",
                height: i % 3 === 0 ? "3px" : "1.5px",
                opacity: 0.5,
                animation: `flicker ${5 + (i % 5)}s ease-in-out ${i * 0.3}s infinite`,
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <div className="flex max-w-2xl flex-col items-center gap-5">
          {TITLE_LINES.map((line) => (
            <motion.div
              key={line.text}
              initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.6, delay: line.delay, ease: "easeOut" }}
            >
              {line.variant === "title" && (
                <h1 className="text-shadow-warm font-display text-4xl font-medium tracking-wide text-sandalwood-light sm:text-6xl">
                  {line.text}
                </h1>
              )}
              {line.variant === "names" && (
                <p className="text-shadow-warm font-display text-2xl italic text-lamp-glow sm:text-3xl">
                  {line.text}
                </p>
              )}
              {line.variant === "sub" && (
                <p className="text-shadow-warm font-body text-sm font-light tracking-wide text-sandalwood-light/85 sm:text-base">
                  {line.text}
                </p>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 7.2 }}
          >
            <KolamDivider className="mt-2 h-6 w-40" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 1.2, delay: 8 },
            y: { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 8 },
          }}
          className="absolute bottom-8 flex flex-col items-center gap-2 text-sandalwood-light/70"
        >
          <span className="font-body text-[10px] uppercase tracking-widest2">
            enter
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 4v14M6 13l6 6 6-6" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
