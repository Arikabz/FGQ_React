/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
        themes: ['bumblebee', 'dark', 'black'],
        darkTheme: 'dark',
    },
}
