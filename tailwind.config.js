/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'blueColor':'#2a68ff',
        'greyIsh':'#f1f4f8',
        'cardShadow':'#f7f8f9',
        'textColor':'#ffffff',
        'primaryColor':'#06448D',
        'primaryTitle':'#082A36',
        'secondaryTitle':'#4F5A5E',
        'skyColor':'#E1F3FA',
        'skyLight':'#F2FBFF',
        'darkBlue':'#063A78',
        'lightGray':'#EAEAEA',
        'yellowMap':'#FFF3E3',
        'skyMap':'#F2FBFF',
        'PurpleMap':'#FCEBFF',
        'greenMap':'##E1F6EF',

      },
      container: {
        center: true,
      },
      widthMargin:{
        '90':'23rem',
      },
      
    },
  },
  plugins: [],
}

