import type { Config } from "tailwindcss";
// @ts-ignore
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}

export default config;