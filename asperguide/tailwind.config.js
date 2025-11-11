/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
    extend: {
      colors: {
        primary: '#3A63B7',
        background: '#ffffff',
        foreground: '#171717',
      },
    },
  },
  plugins: [],
};