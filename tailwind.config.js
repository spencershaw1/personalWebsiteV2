/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    fontFamily: {
      'sans': ['proxima-nova', 'sans-serif']
    },
    extend: {}
  },
  plugins: [],
}
