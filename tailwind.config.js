/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': '#4f3cc9',
        'primary-dark': '#4232aa',
        'secondary': '#ffffff'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
