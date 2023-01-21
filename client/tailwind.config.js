/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'serif': ['"Libre Baskerville"', 'serif']
    }
  },
  plugins: [],
}
