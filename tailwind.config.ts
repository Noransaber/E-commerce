import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparentBg: "#000000",
        globalBg: "#fef7f5",
        backgroundDark: '#180000',
        primary: {
          light: "#ffa491",
          DEFAULT: "#ff8368",
          dark: "#ff6e4e",
        },
        gray: {
          dark: "#6b6262",
          light: "#ded7d6",
        },
        black: "#180000",
        white: "#FFFFFF",
      }
      
    },
  },
  plugins: [],
} satisfies Config;
