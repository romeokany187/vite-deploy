/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        container: {
          center: true,
          padding: {
            default: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '10rem',
          }
        },
        colors : {
          "green": "#9dfbc7",
          "primaryBG": "#0b2740",
          "primary" : "#011426",
          "secondary" : "#051c32"
        },
        backgroundImage : {
          'banner' : "url('../assets/images/bghome/banner.png')"
        },
        fontFamily : {
          "primary" : [ "Montserrat", "sans-serif"]
        },
      },
    },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [],
  },
}

