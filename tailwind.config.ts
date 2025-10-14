import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-mrch-newyork)", "Georgia", "Times", "serif"],
        body: [
          "var(--font-be-vietnam-pro)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        sans: [
          "var(--font-be-vietnam-pro)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: ["var(--font-mrch-newyork)", "Georgia", "Times", "serif"],
      },
      colors: {
        "text-primary": "#212121",
        "text-secondary": "#212121",
        "border-light": "#212121",
        "bg-white": "#ffffff",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "120": "30rem",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      maxWidth: {
        container: "1440px",
        content: "1200px",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
      },
      lineHeight: {
        "extra-relaxed": "1.75",
        "super-relaxed": "1.8",
      },
    },
  },
  plugins: [],
};
export default config;
