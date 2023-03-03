/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marine-blue": "hsl(213, 96%, 18%)",
        "marine-blue-light": "hsl(213, 96%, 28%)",
        "purplish-blue": "hsl(243, 100%, 62%)",
        "pastel-blue": "hsl(228, 100%, 84%)",
        "light-blue": "hsl(206, 94%, 87%)",
        "strawberry-red": "hsl(354, 84%, 57%)",

        "cool-gray": "hsl(231, 11%, 63%)",

        "light-gray": "hsl(229, 24%, 87%)",

        magnolia: "hsl(217, 100%, 97%)",
        alabaster: "hsl(231, 100%, 99%)",
        "alabaster-dark": "hsl(231, 100%,95%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        "ubuntu-regular": [
          "Ubuntu",
          "Helvetica",
          "Verdana",
          "Tahoma",
          "sans-serif",
        ],
        "ubuntu-medium": [
          "Ubuntu Medium",
          "Helvetica",
          "Verdana",
          "Tahoma",
          "sans-serif",
        ],
        "ubuntu-bold": [
          "Ubuntu Bold",
          "Helvetica",
          "Verdana",
          "Tahoma",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
