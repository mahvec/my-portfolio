import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#061611",
        accent: "#1d665d",
        highlight: "#b2d98b",
      },
    },
  },
  plugins: [],
};

export default config;
