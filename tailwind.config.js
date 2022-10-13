/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#ED1C24',
        'orange': '#FF484F',
        'orange1': '#F7941D',
        'orange2' : '#C77A1F',
        'white1' : '#FECACA',
        'FB' : '#CB0008',
      },
      fontSize: {
        base: '1.1rem',
        md: '1.2rem'
      }
    },
  },
  plugins: [],
}
