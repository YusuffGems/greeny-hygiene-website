import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#14263D",
          dark: "#0E1B2B",
          light: "#1E3859",
        },
        charcoal: {
          DEFAULT: "#20252B",
          light: "#2F363F",
        },
        gold: {
          DEFAULT: "#C49A52",
          light: "#D6B274",
          dark: "#A37C3A",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F5F6F7",
        },
        body: "#333333",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "var(--font-manrope)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
