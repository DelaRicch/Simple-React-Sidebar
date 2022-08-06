/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#002575",
        "light-white": "rgba(86, 114, 241, 0.568)"
      }
    },
  },
  plugins: [],
}