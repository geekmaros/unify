module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "btn": "#A999B9 5px 5px"
      },
      colors: {
        "unify-primary": "#1B1B22",
        "unify-beige": "#F1EBE3",
        "unify-dark-100": "#575765",
        "unify-dark-200": "#383841",
        "unify-dark-300": "#2F2D37",
        "unify-gray-100": "#878787",
        "unify-purple-100": "#E7DFED",
        "unify-purple-200": "#BC9CDB",
        "unify-purple-300": "#5F1DA0",
        "unify-purple-400": "#1D0633",
        "unify-btn": "#A999B9",
        "unify-landing": "#E9F4FF"
      },
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      fontSize: {
        "32px": "2rem",
        "40px": "2.5rem",
        "78px": "4.5rem",
      },
      letterSpacing: {
        "0.01": "0.01em",
      },
      lineHeight: {
        "140": "140%",
        "150": "150%",
        "56": "3.5rem"
      },
      maxWidth: {
        "293px": "18.3rem",
        "400px": "25rem",
        "385px": "24.063rem"
      },
      spacing:{
        "140px": "8.75rem",
        "70px": "4.4rem",
        "210px": "13.125rem",
        "15px": "0.938rem",
        "35px": "2.188rem",
        "93px": "5.813rem",
        "400px": "25rem",
        "385px": "24.063rem"
      }
    },
  },
  plugins: [],
};
