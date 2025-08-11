/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "../../packages/ui/**/*.{js,jsx,ts,tsx}",  // if you made a shared UI pkg
  ],
  darkMode: "class", // we toggle it manually like your web app
  theme: { extend: {} },
  plugins: [],
};
