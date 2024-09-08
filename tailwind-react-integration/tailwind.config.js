// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Update the purge key to content for Vite
  theme: {
    extend: {},
  },
  plugins: [],
};
