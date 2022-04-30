module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "unify-primary": "#1B1B22",
        "unify-beige": "#F1EBE3",
        "unify-dark-100": "#575765",
        "unify-dark-200": "#383841",
        "unify-dark-300": "#2F2D37",
        "unify-gray-100": "#878787",
        "unify-gray-200": "#545454",
        "unify-light-stroke": "#EAEAEA",
        "unify-purple-100": "#E7DFED",
        "unify-purple-200": "#BC9CDB",
        "unify-purple-300": "#5F1DA0",
        "unify-purple-400": "#1D0633",
      },
      flexBasis: {
        "279px": "17.4375rem",
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
        "160": "160%",
      },
      maxWidth: {
        "293px": "18.3rem",
      },
      minWidth: {
        "279px": "17.4375rem",
      },
      spacing:{
        "279px": "17.4375rem",
        "210px": "13.125rem",
        "206px": "12.875rem",
        "157px": "9.8125rem",
        "140px": "8.75rem",
        "122px": "7.625rem",
        "102px": "6.375rem",
        "78px": "4.875rem",
        "70px": "4.4rem",
        "35px": "2.188rem",
        "30px": "1.875rem",
        "15px": "0.938rem",
        "12.5px": "0.78125rem",
      }
    },
  },
  plugins: [],
};
