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
        quicksand: ["var(--font-quicksand)"],
      },
      colors: {
        light: "#E2E6EC",
        dark: "#22233F",
        primary: "#6E4FEF",
        secondary: "#9668F5",
      },
    },
  },
  plugins: [],
};
export default config;
