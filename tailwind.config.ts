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
        background: "#151515",
        accent: "#4EE1A0",
        neutral: "#242424",
        "secondary-text": "#d9d9d9",
        "primary-text": "#ffffff",
        warning: "#FF6F5B",
      },
    },
  },
  plugins: [],
};
export default config;
