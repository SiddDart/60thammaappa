export type SceneLine = {
  text: string;
  variant?: "eyebrow" | "body" | "name" | "title";
};

export type SceneConfig = {
  id: string;
  image: string;
  alt: string;
  lines: SceneLine[];
  effect: "push" | "forward" | "bloom" | "drift" | "fire" | "none";
};

export const COUPLE_NAMES = {
  her: "Mrs. Neelavathy",
  him: "Mr. Sathyendran",
};

export const CHILDREN_NAMES = ["Shilpa", "Sneha", "Sai Siddharth"];

export const VENUE = {
  name: "Courtyard by Marriott",
  city: "Madurai",
};

export const scenes: SceneConfig[] = [
  {
    id: "house-exterior",
    image: "/images/01-house-exterior.jpg",
    alt: "The family home at dusk, gate open and warm lights glowing",
    effect: "push",
    lines: [
      { text: "Our home opens its doors with joy…", variant: "eyebrow" },
      {
        text: "With immense gratitude and happiness, we invite you to celebrate this sacred milestone with our family.",
        variant: "body",
      },
    ],
  },
  {
    id: "gate-entrance",
    image: "/images/02-gate-entrance.jpg",
    alt: "The open gate of the family home inviting guests in",
    effect: "forward",
    lines: [
      { text: "Sixty years ago, two souls began a journey together.", variant: "eyebrow" },
      {
        text: "A journey of love, resilience, family, and grace.",
        variant: "body",
      },
    ],
  },
  {
    id: "front-entrance",
    image: "/images/03-front-entrance.jpg",
    alt: "The front entrance of the home, warmly lit",
    effect: "bloom",
    lines: [
      {
        text: "Join us as we celebrate the Shashti Abda Poorthi ceremony of",
        variant: "eyebrow",
      },
      { text: "Mrs. Neelavathy", variant: "name" },
      { text: "&", variant: "body" },
      { text: "Mr. Sathyendran", variant: "name" },
    ],
  },
  {
    id: "corridor",
    image: "/images/04-corridor.jpg",
    alt: "A corridor leading deeper into the home",
    effect: "drift",
    lines: [
      {
        text: "With hearts full of love, their daughters and son invite you to be part of this cherished celebration.",
        variant: "body",
      },
      { text: "Shilpa", variant: "name" },
      { text: "Sneha", variant: "name" },
      { text: "Sai Siddharth", variant: "name" },
    ],
  },
  {
    id: "inner-archway",
    image: "/images/05-inner-archway.jpg",
    alt: "An inner archway lit with soft golden light",
    effect: "bloom",
    lines: [
      {
        text: "Your presence, blessings, and love will make this occasion complete.",
        variant: "body",
      },
    ],
  },
  {
    id: "homam",
    image: "/images/06-homam.jpg",
    alt: "The sacred homam ceremony with priests and holy fire",
    effect: "fire",
    lines: [
      {
        text: "Under sacred fire and divine blessings, we renew a bond that has guided generations.",
        variant: "body",
      },
      { text: "Please join us for the ceremony and lunch.", variant: "eyebrow" },
    ],
  },
];

export const finalArtwork = {
  image: "/images/07-meenakshi-thirukalyanam.jpg",
  alt: "Meenakshi Thirukalyanam divine artwork",
};
