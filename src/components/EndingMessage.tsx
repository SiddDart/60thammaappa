"use client";

import { motion } from "framer-motion";
import { CHILDREN_NAMES } from "@/config/scenes";
import { KolamDivider } from "./KolamDivider";

export function EndingMessage() {
  return (
    <section className="scene-container bg-ink" aria-label="Closing message">
      {/* Soft diya glow */}
      <div
        className="scene-vignette"
        style={{
          background:
            "radial-gradient(35% 30% at 50% 68%, rgba(255,178,85,0.28), transparent 70%)",
        }}
      />
      <motion.div
        className="absolute left-1/2 top-[68%] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-lamp"
        animate={{ opacity: [0.5, 1, 0.6, 0.95], scale: [1, 1.3, 1, 1.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ boxShadow: "0 0 30px 10px rgba(255,178,85,0.35)" }}
      />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6, once: true }}
          transition={{ duration: 1.4 }}
          className="text-shadow-warm font-display text-2xl italic text-sandalwood-light sm:text-3xl"
        >
          With love and gratitude, we await your presence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.6, once: true }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <KolamDivider className="my-6 h-6 w-40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.6, once: true }}
          transition={{ duration: 1.2, delay: 1.4 }}
          className="flex flex-col items-center gap-1"
        >
          <p className="font-display text-xl text-brass-light">
            {CHILDREN_NAMES[0]}
          </p>
          <p className="font-display text-xl text-brass-light">
            {CHILDREN_NAMES[1]}
          </p>
          <p className="font-display text-sm text-sandalwood-dark">&amp;</p>
          <p className="font-display text-xl text-brass-light">
            {CHILDREN_NAMES[2]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
