/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'color-linear': 'linear-gradient(245.29deg, #6DC1DC 13.32%, #A690FC 28.55%, #FC96BB 55.55%, #FFC397 84.12%), linear-gradient(0deg, #FFFFFF, #FFFFFF);'
      },
      animation: {
        'bounce-slow': 'translate 3s linear infinite',
        'bounce_slow_bottom': 'translate_custom 3s linear infinite'
      },
      keyframes: {
        translate: {
          '0%, 100%': {
            transform: 'translateY(-15%)'
          },
          '50%': {
            transform: 'translateY(0)'
          }
        },
        translate_custom: {
          '0%, 100%': {
            transform: 'translateY(15%)'
          },
          '50%': {
            transform: 'translateY(0)'
          }
        }
      },
      boxShadow: {
        'img': '0px 30px 40px 0px #D4D9E833',
      }
    },
  },
  plugins: [],
}

