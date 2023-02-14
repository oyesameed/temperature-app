/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 
        
          'currentColor',
          
          // Grays
          'gray-1': '#1b1d1c',
          'gray-2': '#333333',
          
          // Accents
          'accent-1': '#25d2ae',
          'accent-2': '#d5d843',
          
          // Whites
          'white-1': '#ededed',
          'white-2': '#9c9c9c'
      },
      screens: {
        '3md': '1124px',
      },
    },
  },
  plugins: [require("daisyui")],
}
