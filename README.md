# Shashti Abda Poorthi — Invitation Experience

A cinematic, single-scroll invitation site for a Shashti Abda Poorthi (60th
wedding anniversary) celebration — built to feel like walking through a Tamil
home toward a sacred ceremony, not like a wedding template.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 — best viewed on a phone in landscape, but fully
responsive down to portrait mobile and up to desktop.

## Deploy to Vercel

```bash
npm run build   # sanity-check the production build first
```

Then either:
- Push this folder to a GitHub repo and import it at vercel.com/new, or
- Run `npx vercel` from inside this folder and follow the prompts.

No environment variables are required.

## What's inside

```
src/
  app/
    layout.tsx        — fonts (Cormorant Garamond + Jost), metadata, global shell
    page.tsx           — mounts the Experience
    globals.css         — scroll-snap, vignette, and text-shadow utilities
  components/
    Experience.tsx      — orchestrates loading → audio → the full scroll journey
    LoadingScreen.tsx    — kolam line-drawing loader with % progress
    AudioController.tsx  — mute/unmute ambient drone + temple bells
    SkyIntro.tsx        — opening animated sky, sequential title reveal, pan-down
    Scene.tsx           — reusable scene: image + parallax effect + text + kolam divider
    ArtworkReveal.tsx    — golden dissolve into the Meenakshi Thirukalyanam artwork
    InvitationCard.tsx  — final ceremony details card
    EndingMessage.tsx    — closing message + diya glow
    KolamDivider.tsx     — the site's signature ornamental motif (SVG)
  config/
    scenes.ts           — ALL text copy, names, venue, and image sequence live here
  hooks/
    useLenis.ts         — binds Lenis smooth scrolling to the scroll container
    useGsapFireGlow.ts   — GSAP + ScrollTrigger driven glow for the homam scene
public/
  images/               — the 7 uploaded photos, already compressed to web-ready JPEGs
  audio/                — see audio/README.txt — add drone.mp3 + bells.mp3 here
```

## Editing the content

Everything you're likely to want to change — the couple's names, the
children's names, the venue, and every line of on-screen copy — lives in one
file: `src/config/scenes.ts`. Fill in the date/time placeholders directly in
`src/components/InvitationCard.tsx` once they're finalized.

## Adding ambient audio

The soft tanpura drone and temple bells are optional. Drop two files into
`public/audio/`:

- `drone.mp3` — a continuous, loop-friendly drone
- `bells.mp3` — sparse, distant temple bells

The site works perfectly with no audio present — the mute button just stays
silent until you add files (browsers also require a tap before any audio can
play, which the button handles).

## Notes on the experience

- The journey is one continuous vertical scroll with scroll-snap between
  scenes (feels intentional and paced on both touch and mouse wheel).
- Lenis smooths scroll input; Framer Motion drives per-scene parallax/reveal;
  GSAP + ScrollTrigger drives the fire-glow breathing effect in the homam
  scene — three tools working together rather than overlapping.
- Images were resized and compressed (JPEG, max width 1920px) for fast mobile
  loading over WhatsApp-shared links.
- Reduced-motion preference is respected globally (see `globals.css`).
