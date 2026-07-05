"use client";

import { motion } from "framer-motion";
import { COUPLE_NAMES, VENUE, finalArtwork } from "@/config/scenes";
import { KolamDivider } from "./KolamDivider";

export function InvitationCard() {
  return (
    <section className="scene-container bg-maroon-dark" aria-label="Invitation details">
      <img
        src={finalArtwork.image}
        alt={finalArtwork.alt}
        className="scene-image opacity-40 blur-[1px]"
        loading="lazy"
      />
      <div
        className="scene-vignette"
        style={{ background: "rgba(36,20,18,0.55)" }}
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-5 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full max-w-md rounded-sm border border-brass/40 bg-ink/55 px-7 py-9 text-center shadow-[0_0_60px_rgba(0,0,0,0.4)] backdrop-blur-md sm:px-10 sm:py-10"
        >
          <p className="font-display text-xs uppercase tracking-widest2 text-brass-light">
            Shashti Abda Poorthi Ceremony
          </p>

          <KolamDivider className="mx-auto my-4 h-5 w-32" />

          <p className="font-display text-2xl italic text-sandalwood-light sm:text-3xl">
            {COUPLE_NAMES.her}
          </p>
          <p className="my-1 font-display text-base text-brass-light">&amp;</p>
          <p className="font-display text-2xl italic text-sandalwood-light sm:text-3xl">
            {COUPLE_NAMES.him}
          </p>

          <div className="ornament-divider my-6">
            <span className="line" />
            <span className="h-1.5 w-1.5 rotate-45 bg-brass" />
            <span className="line" />
          </div>

          <dl className="grid grid-cols-2 gap-y-4 text-left">
            <div>
              <dt className="font-body text-[10px] uppercase tracking-widest2 text-brass-light/80">
                Date
              </dt>
              <dd className="font-display text-lg text-sandalwood-light">
                [Date placeholder]
              </dd>
            </div>
            <div>
              <dt className="font-body text-[10px] uppercase tracking-widest2 text-brass-light/80">
                Time
              </dt>
              <dd className="font-display text-lg text-sandalwood-light">
                [Time placeholder]
              </dd>
            </div>
            <div className="col-span-2">
              <dt className="font-body text-[10px] uppercase tracking-widest2 text-brass-light/80">
                Venue
              </dt>
              <dd className="font-display text-lg text-sandalwood-light">
                {VENUE.name}, {VENUE.city}
              </dd>
            </div>
          </dl>

          <p className="mt-6 font-body text-sm italic text-sandalwood-dark">
            Lunch to follow
          </p>
        </motion.div>
      </div>
    </section>
  );
}
