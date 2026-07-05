"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { finalArtwork } from "@/config/scenes";

export function ArtworkReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const artworkOpacity = useTransform(scrollYProgress, [0, 0.35, 1], [0, 1, 1]);
  const artworkScale = useTransform(scrollYProgress, [0, 1], [1.18, 1.0]);
  const bloomOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0.9, 0.6, 0.2, 0]);

  return (
    <section ref={ref} className="scene-container bg-maroon-dark" aria-label="Divine transition into Meenakshi Thirukalyanam artwork">
      <motion.img
        src={finalArtwork.image}
        alt={finalArtwork.alt}
        className="scene-image"
        style={{ opacity: artworkOpacity, scale: artworkScale }}
        loading="lazy"
      />

      {/* golden bloom wash that fades as the artwork resolves in */}
      <motion.div
        className="scene-vignette"
        style={{
          opacity: bloomOpacity,
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(255,209,153,0.55), rgba(90,26,31,0.85) 75%)",
        }}
      />

      <div
        className="scene-vignette"
        style={{
          background:
            "linear-gradient(180deg, rgba(36,26,20,0.5) 0%, transparent 25%, transparent 65%, rgba(36,26,20,0.7) 100%)",
        }}
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.6em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.35em" }}
          viewport={{ amount: 0.6, once: true }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="text-shadow-warm font-display text-lg uppercase text-lamp-glow sm:text-xl"
        >
          Meenakshi Thirukalyanam
        </motion.p>
      </div>
    </section>
  );
}
