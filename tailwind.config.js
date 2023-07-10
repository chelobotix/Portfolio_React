/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      monument: "Monument-regular",
    },
    colors: {
      "dark-pink": "#5f43b2",
      "dark-purple": "#3a3153",
      "dark-blue": "#151666",
      "ligth-blue": "#b2beff",
      "letter-blue": "#b1bcfe",
    },
  },
  plugins: [],
});
