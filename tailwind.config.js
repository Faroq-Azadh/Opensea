/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
    },
    screens: {
      'Bigphone':'480px',
      'Tablet': '600px',
      'Tlg':'768px',
      'Md':'800px',
      'Ld':'960px',
      'Desktop':'1024px',
      'Monitor':'1120px',
      'Large':'1200px',
      'Largest':'1440px'
    },
    borderWidth: {
      DEFAULT: '1px',
      '1': '0.5px',
    },
    minWidth: {
      '40%':'40%',
      'F': '80vw',
      'D': '45vw',
    }
  },
  plugins: [],
}

