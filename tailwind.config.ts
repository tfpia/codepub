import type { Config } from "tailwindcss"

// 🌟 You made it to the right file for Task 2 of Level 1 🌟

// in this file we can define out own tailwind utility classes
// this helps with e.g following style guides for the
// implementation while sill using tailwind in the usuall way

// Scroll to the next comment to find some colors that you can safely modify and use

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-gray-100",
    "bg-green-100",
    "bg-green-200",
    "bg-green-300",
    "bg-green-400",
    "bg-green-500",
    "bg-green-600",
    "bg-range-0",
    "bg-range-100",
    "bg-range-250",
    "bg-range-300",
    "bg-range-350",
    "bg-range-500",
    "bg-range-600",
    "bg-range-750",
    "bg-range-850",
    "bg-range-1000",
  ],
  theme: {
    extend: {
      colors: {
        main: "#ADEE68",
        primary: "#36893B",
        dark: "#154618",
        light: "#CEF5A4",
        superlight: "#ECFFC7",
        lightpurple: "#C6C6FF",
        purple: "#A29AFF",
        gray: {
          100: "#f7fafc",
          800: "#424242",
        },
        // Use and/or Change the colors here in the "range" section
        // and use them to change the colors in the
        // file: /src/utils/colorUtils.ts
        // use the exisiting code in that file as guidance
        range: {
          0: "#FFD6D6", // Light Red
          100: "#FFB2B2",
          250: "#FF8C8C",
          300: "#FF7F7F", // Red
          350: "#FF6E6E",
          500: "#FFE566", // Yellow
          600: "#FFE05E",
          750: "#FFD84C",
          850: "#FFCD3D",
          1000: "#ADE498", // Green
        },
        green: {
          100: "f0fff4",
          200: "#c6f6d5",
          300: "#9ae6b4",
          400: "#68d391",
          500: "#48bb78",
          600: "#2f855a",
        },
      },
    },
  },
  plugins: [],
}
export default config
