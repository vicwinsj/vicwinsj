/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}", "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        general: ["General Sans", "sans-serif"],
        name: ["Tiny5", "sans-serif"],
      },
      boxShadow: {
        "btn-shadow": "inset .01em .01em 0.1em .1em rgb(55,65,81, 1)",
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
    },
  },
  plugins: [],
};
