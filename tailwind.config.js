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
        "unify-purple-100": "#E7DFED",
        "unify-purple-200": "#BC9CDB",
        "unify-purple-300": "#5F1DA0",
        "unify-purple-400": "#1D0633",
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
      },
      maxWidth: {
        "293px": "18.3rem",
      },
      spacing:{
        "140px": "8.75rem",
        "70px": "4.4rem",
        "210px": "13.125rem",
      }
    },
  },
  plugins: [],
};
