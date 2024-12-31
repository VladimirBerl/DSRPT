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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6F36D9",
        dark: "#09091a",
        grey: "#76768C",
      },
      fontFamily: {
        onest: ["var(--font-onest-sans)", "sans-serif"],
        etude: ["var(--font-etude)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
