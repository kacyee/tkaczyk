/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
      "2xl": "1920px",
    },
    extend: {
      colors: {
        black: "#0B0B0B",
        white: "#FFFEFD",
        yellow: "#FFAC30",
        blue: "#64BCFF",
      },
      margin: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};
