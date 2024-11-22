import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter-tight)", "sans-serif"],
      },
      colors: {
        deepblack:'#1B1E23',

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        hero:'url(/images/BG.svg)',
        cta:'url(/images/automatebg.svg)'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
