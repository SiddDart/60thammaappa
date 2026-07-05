"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { SceneConfig } from "@/config/scenes";
import { KolamDivider } from "./KolamDivider";
import { useGsapFireGlow } from "@/hooks/useGsapFireGlow";

const EMBER_COUNT = 10;

export function Scene({
  scene,
  index,
  scrollerRef,
}: {
  scene: SceneConfig;
  index: number;
  scrollerRef?: React.RefObject<HTMLElement>;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useGsapFireGlow(ref, glowRef, scrollerRef ?? { current: null });

  // Effect-specific transforms, all driven off local scroll progress.
  const scalePush = useTransform(scrollYProgress, [0, 1], [1.15, 1.0]);
  const scaleDrift = useTransform(scrollYProgress, [0, 1], [1.08, 1.16]);
  const xDrift = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  const yForward = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const opacityBloom = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.85]);

  let imageStyle: Record<string, unknown> = {};
  switch (scene.effect) {
    case "push":
      imageStyle = { scale: scalePush };
      break;
    case "forward":
      imageStyle = { y: yForward, scale: 1.06 };
      break;
    case "drift":
      imageStyle = { x: xDrift, scale: scaleDrift };
      break;
    case "bloom":
      imageStyle = { opacity: opacityBloom, scale: 1.05 };
      break;
    case "fire":
      imageStyle = { scale: 1.04 };
      break;
    default:
      imageStyle = {};
  }

  return (
    <section
      ref={ref}
      className="scene-container"
      aria-label={scene.alt}
    >
      <motion.img
        src={scene.image}
        alt={scene.alt}
        className="scene-image"
        style={imageStyle}
        loading={index === 0 ? "eager" : "lazy"}
      />

      {/* Warm cinematic vignette + grade, tuned darker at edges for text legibility */}
      <div
        className="scene-vignette"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 60%, transparent 30%, rgba(36,26,20,0.55) 100%), linear-gradient(180deg, rgba(36,26,20,0.35) 0%, transparent 30%, transparent 60%, rgba(36,26,20,0.65) 100%)",
        }}
      />

      {scene.effect === "fire" && (
        <>
          <div
            ref={glowRef}
            className="scene-vignette"
            style={{
              background:
                "radial-gradient(45% 40% at 50% 55%, rgba(255,140,60,0.5), transparent 70%)",
            }}
          />
          <EmberParticles />
        </>
      )}

      {scene.effect === "bloom" && (
        <div
          className="scene-vignette animate-flicker-slow"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 45%, rgba(255,178,85,0.18), transparent 70%)",
          }}
        />
      )}

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end px-6 pb-16 text-center sm:pb-20 md:justify-center md:pb-0">
        <div className="landscape-tight flex max-w-xl flex-col items-center gap-5">
          {scene.lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.6, once: true }}
              transition={{ duration: 1.1, delay: i * 0.25, ease: "easeOut" }}
            >
              {line.variant === "name" ? (
                <p className="text-shadow-warm font-display text-3xl italic tracking-wide text-sandalwood-light sm:text-4xl">
                  {line.text}
                </p>
              ) : line.variant === "eyebrow" ? (
                <p className="text-shadow-warm font-display text-xl font-light text-brass-light sm:text-2xl">
                  {line.text}
                </p>
              ) : (
                <p className="text-shadow-warm font-body text-sm font-light leading-relaxed text-sandalwood-light/90 sm:text-base">
                  {line.text}
                </p>
              )}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.6, once: true }}
            transition={{ duration: 1, delay: scene.lines.length * 0.25 + 0.2 }}
          >
            <KolamDivider className="mt-2 h-6 w-40 opacity-70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function EmberParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      {Array.from({ length: EMBER_COUNT }).map((_, i) => (
        <span
          key={i}
          className="absolute bottom-1/4 block h-1 w-1 rounded-full bg-lamp animate-ember-rise"
          style={{
            left: `${20 + ((i * 61) % 60)}%`,
            animationDelay: `${(i % EMBER_COUNT) * 0.45}s`,
            animationDuration: `${3.2 + (i % 4) * 0.6}s`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
