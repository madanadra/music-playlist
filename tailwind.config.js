/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'one': '#ffffff',
      'two': '#030303',
      'three': '#1c1c1c',
      'four': '#9c9c9c'
    },
    fontFamily: {
      'main': 'Roboto, sans-serif',
    },
    extend: {},
  },
  plugins: [],
  important: true,
}
