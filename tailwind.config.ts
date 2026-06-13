import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Affileo — bleu confiance fintech
        bg: "#0A0E1A",
        surface: "#101729",
        border: "#1E2640",
        ink: "#F5F7FB",
        muted: "#8B95B0",
        accent: "#2A6FF0",       // bleu primaire — pas trop foncé, pas trop clair
        accentDark: "#1E5FE3",
        accentSoft: "#152244",
        success: "#22C55E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
