import { heroui } from "@heroui/theme";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/**/*.js",
  ],
  theme: { extend: {} },
  darkMode: "class",
  plugins: [heroui()],
};
