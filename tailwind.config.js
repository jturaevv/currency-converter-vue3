/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    textColor: (theme) => theme('colors'),
    colors: {
      ...colors,
      primary: colors.blue[500],
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
