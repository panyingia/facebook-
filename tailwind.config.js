/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  mode: 'jit',
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif']
      },
      spacing: {
        'main-span': '72px'
      },
      colors: {
        'fb-bg': '#18191a',
        'fb-header': '#242526',
        'fb-input': '#3a3b3c',
        'fb-popover': '#3e4042',
        'fb-active': '#323436',
        'fb-card': '#242526',
        'fb': '#2e89ff'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
