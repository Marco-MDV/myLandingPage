/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'fade-up':{
          '0%':{opacity: '0', transform: 'translateY(30px)'},
          '100%':{opacity:'1', transform:'translateY(0)'},
        },
        'fade-bottom':{
          '0%':{opacity: '0', transform: 'translateY(-30px)'},
          '100%':{opacity:'1', transform:'translateY(0)'},
        },
        'fade-left':{
          '0%':{opacity: '0', transform: 'translateX(-30px)'},
          '100%':{opacity:'1', transform:'translateX(0)'},
        }
      },
      animation:{
        'fade-up': 'fade-up 0.7s ease-in-out forwards',
        'fade-bottom': 'fade-bottom 0.7s ease-in-out forwards',
        'fade-left': 'fade-left 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
