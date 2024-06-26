/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./*.html"],
  theme: {
    extend: {
      colors: {
        "dark-mint": "#137a63",
        ginger: "#b06500",
      },
      fontFamily: {
        general: ["General Sans", "sans-serif"],
        name: ["Tiny5", "sans-serif"],
        victor: ["Victor Mono", "monospace"],
      },
      boxShadow: {
        "btn-shadow": "inset .01em .01em 0.1em .1em black",
        "faint-shadow": "inset 0 0 0 0 rgba(0, 0, 0, 0)",
        "img-hover": ".1em .1em 1em .3em rgb(55,65,81, 1)",
        img: ".1em .1em .3em .1em rgb(55,65,81, 1)",
      },
      transitionProperty: {
        shadow: "box-shadow",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      flexBasis: {
        "1/2": "50%",
        "3/4": "75%",
        "1/3": "33.333%",
        "2/3": "66.666%",
        20: "20%",
        40: "40%",
      },
      backgroundPosition: {
        portrait: "10% 43%",
      },
      scale: {
        125: "1.25",
        150: "1.5",
        700: "7",
      },
    },
  },
  plugins: [],
};
