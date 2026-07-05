"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Ties the homam scene's warm fire-glow overlay to scroll position via
 * GSAP + ScrollTrigger: the glow breathes in as the scene enters view and
 * settles as the viewer lingers, independent of the Framer Motion layers.
 */
export function useGsapFireGlow(
  sectionRef: React.RefObject<HTMLElement>,
  glowRef: React.RefObject<HTMLElement>,
  scrollerRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!sectionRef.current || !glowRef.current) return;

    const ctx = gsap.context(() => {
      const tween = gsap.fromTo(
        glowRef.current,
        { opacity: 0.15, scale: 1 },
        {
          opacity: 0.5,
          scale: 1.08,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            scroller: scrollerRef.current ?? undefined,
            start: "top bottom",
            end: "center center",
            scrub: 1.2,
          },
        }
      );

      return () => {
        tween.kill();
      };
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [sectionRef, glowRef, scrollerRef]);
}
