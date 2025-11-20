// tailwind.config.js
const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",    // <-- REQUIRED
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // <-- REQUIRED
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",  // <-- if using pages folder
    "./node_modules/@heroui/theme/dist/components/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
