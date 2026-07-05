import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sandalwood: {
          DEFAULT: "#E7D9BE",
          light: "#F3EBDA",
          dark: "#C9B48C",
        },
        dusk: {
          DEFAULT: "#C97A4A",
          light: "#E29A66",
          dark: "#9C5A34",
        },
        maroon: {
          DEFAULT: "#5A1A1F",
          light: "#7A2A2F",
          dark: "#3A0F13",
        },
        brass: {
          DEFAULT: "#B8863B",
          light: "#D9AE63",
          dark: "#8C641F",
        },
        lamp: {
          DEFAULT: "#FFB255",
          glow: "#FFD199",
        },
        ink: {
          DEFAULT: "#241A14",
          soft: "#3A2A1F",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "drift": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(4%)" },
        },
        "flicker": {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.85" },
          "50%": { opacity: "0.65" },
          "55%": { opacity: "0.9" },
        },
        "ember-rise": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.8" },
          "100%": { transform: "translateY(-120px) scale(0.3)", opacity: "0" },
        },
        "kolam-draw": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        "fade-in": "fade-in 2.5s ease-out forwards",
        "drift-slow": "drift 40s ease-in-out infinite alternate",
        "flicker-slow": "flicker 6s ease-in-out infinite",
        "ember-rise": "ember-rise 4s ease-in infinite",
        "kolam-draw": "kolam-draw 3.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
