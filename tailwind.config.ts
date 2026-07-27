import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FCFBF7",
        subtle: "#F3EEE4",
        ink: "#111827",
        muted: "#667085",
        border: "#E3D8C8",
        accent: {
          DEFAULT: "#C45F1F",
          dark: "#9E4716",
        },
        correct: {
          DEFAULT: "#1F9D63",
          bg: "#EAF7F0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        content: "1120px",
      },
    },
  },
  plugins: [],
};

export default config;
