"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Sets up Lenis smooth-scrolling bound to a given scroll container.
 * Returns the Lenis instance ref so callers (e.g. GSAP ScrollTrigger)
 * can sync with it if needed.
 */
export function useLenis(containerRef: React.RefObject<HTMLElement>) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      wrapper: containerRef.current,
      content: containerRef.current.firstElementChild as HTMLElement,
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [containerRef]);

  return lenisRef;
}
