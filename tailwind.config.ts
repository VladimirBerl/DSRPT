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
      animation: {
        swaying: "swaying 2s ease-in-out infinite",
      },
      keyframes: {
        swaying: {
          "0%": {
            transform: "translateY(5%)",
          },
          "50%": {
            transform: "translateY(-5%)",
          },
          "100%": {
            transform: "translateY(5%)",
          },
        },
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgba(255, 255, 255, 0.0509) 0%, rgba(54, 62, 217, 0.2) 50%, rgba(54, 62, 217, 0.7) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
