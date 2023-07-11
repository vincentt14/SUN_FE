/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#272727",
        secondary: "#FFCE07",
        tertiary: "#C4C4C4",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
