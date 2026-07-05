"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Ambient audio controller: a soft tanpura drone + distant temple bells,
 * looping quietly under the whole experience. Autoplay-blocked browsers
 * require a user gesture, so the first tap anywhere unmutes/starts audio.
 *
 * Drop your own audio files into /public/audio/ with these exact names:
 *   - drone.mp3   (soft tanpura drone, loop-friendly)
 *   - bells.mp3   (distant temple bells, loop-friendly, low volume)
 * If the files are absent, the button still renders but stays silent —
 * the experience never breaks without audio.
 */
export function AudioController() {
  const droneRef = useRef<HTMLAudioElement | null>(null);
  const bellsRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (droneRef.current) droneRef.current.volume = 0.35;
    if (bellsRef.current) bellsRef.current.volume = 0.2;
  }, []);

  const enableAudio = async () => {
    setHasInteracted(true);
    setMuted(false);
    try {
      await droneRef.current?.play();
      await bellsRef.current?.play();
    } catch {
      // Autoplay blocked or file missing — fail silently, UI stays functional.
    }
  };

  const toggle = () => {
    if (muted) {
      enableAudio();
    } else {
      setMuted(true);
      droneRef.current?.pause();
      bellsRef.current?.pause();
    }
  };

  return (
    <>
      <audio ref={droneRef} src="/audio/drone.mp3" loop preload="none" />
      <audio ref={bellsRef} src="/audio/bells.mp3" loop preload="none" />
      <motion.button
        onClick={toggle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
        aria-label={muted ? "Unmute ambient temple sound" : "Mute ambient temple sound"}
        className="fixed bottom-5 right-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-brass/50 bg-ink/50 text-sandalwood-light backdrop-blur-sm transition hover:border-brass"
      >
        {muted || !hasInteracted ? <MuteIcon /> : <SoundIcon />}
      </motion.button>
    </>
  );
}

function SoundIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 9v6h4l5 5V4L8 9H4z" />
      <path d="M16.5 8.5a5 5 0 010 7" />
      <path d="M19 6a9 9 0 010 12" opacity="0.6" />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 9v6h4l5 5V4L8 9H4z" />
      <path d="M16 9l5 6M21 9l-5 6" />
    </svg>
  );
}
