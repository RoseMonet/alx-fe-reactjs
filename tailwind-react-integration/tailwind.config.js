/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Paths to all template files
  darkMode: 'media', // or 'class' for manual control
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      // Add your variant extensions here if needed
      backgroundColor: ['active'],
      textColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
};