import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        manrope: ["var(--font-manrope)"],
      },
      boxShadow: {
        grid: "0px 2px 4px 0px rgba(0, 0, 0, 0.05);",
      },
      backgroundImage: {
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
      },
      keyframes: {
        disco: {
          "0%": { transform: "translateY(-50%) rotate(0deg)" },
          "100%": { transform: "translateY(-50%) rotate(360deg)" },
        },
      },
      animation: {
        disco: "disco 3s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
