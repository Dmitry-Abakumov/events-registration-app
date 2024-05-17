import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      xl: "1280px",

      smOnly: { max: "767.98px" },
      mdOnly: { min: "768px", max: "1279.98px" },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "16px",
        sm: "16px",
        md: "42px",
        xl: "32px",
      },
    },
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        geologica: ["var(--font-geologica)"],
      },

      colors: {
        accent: "#0052F2",
      },
    },
  },
  plugins: [],
};
export default config;
