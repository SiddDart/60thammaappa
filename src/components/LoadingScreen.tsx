"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const start = Date.now();
    const duration = 2600;
    let raf: number;

    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        >
          <motion.svg
            viewBox="0 0 200 200"
            width="140"
            height="140"
            initial="hidden"
            animate="visible"
          >
            <motion.circle
              cx="100"
              cy="100"
              r="70"
              fill="none"
              stroke="#B8863B"
              strokeWidth="1"
              strokeDasharray="6 10"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 1,
                  transition: { duration: 2, ease: "easeInOut" },
                },
              }}
            />
            <motion.path
              d="M100 40
                 C 60 40, 40 70, 40 100
                 C 40 130, 60 160, 100 160
                 C 140 160, 160 130, 160 100
                 C 160 70, 140 40, 100 40 Z"
              fill="none"
              stroke="#E7D9BE"
              strokeWidth="1"
              variants={{
                hidden: { pathLength: 0, opacity: 0 },
                visible: {
                  pathLength: 1,
                  opacity: 0.8,
                  transition: { duration: 2.2, ease: "easeInOut", delay: 0.2 },
                },
              }}
            />
            <motion.circle
              cx="100"
              cy="100"
              r="3"
              fill="#FFB255"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6] }}
              transition={{ duration: 2, delay: 1.2 }}
            />
          </motion.svg>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="mt-6 font-display text-sm tracking-widest2 text-brass-light"
          >
            {progress}%
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.9, duration: 1.2 }}
            className="mt-2 font-body text-[11px] uppercase tracking-widest2 text-sandalwood-dark"
          >
            preparing the threshold
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
