"use client";

import { useRef, useState } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { AudioController } from "./AudioController";
import { SkyIntro } from "./SkyIntro";
import { Scene } from "./Scene";
import { ArtworkReveal } from "./ArtworkReveal";
import { InvitationCard } from "./InvitationCard";
import { EndingMessage } from "./EndingMessage";
import { scenes } from "@/config/scenes";
import { useLenis } from "@/hooks/useLenis";

export function Experience() {
  const [loaded, setLoaded] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useLenis(scrollerRef);

  return (
    <>
      <LoadingScreen onDone={() => setLoaded(true)} />

      {loaded && <AudioController />}

      <div ref={scrollerRef} className="scene-scroller">
        <div>
          <SkyIntro />
          {scenes.map((scene, i) => (
            <Scene key={scene.id} scene={scene} index={i} scrollerRef={scrollerRef} />
          ))}
          <ArtworkReveal />
          <InvitationCard />
          <EndingMessage />
        </div>
      </div>
    </>
  );
}
