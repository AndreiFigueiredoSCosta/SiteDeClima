/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "Sans-serif"],
      },
      dropShadow: {
        cinza: "0 4px 6px rgba(200, 200, 200)",
      },
    },
  },
  plugins: [],
};
