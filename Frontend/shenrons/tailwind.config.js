/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#FEB415",
        "secondary": "#DF2530",
        "tertiary": "#48C03F",
        "light": "#FFFFFF",
        "dark": "#080808",
      }
    },
  },
  plugins: [],
}

