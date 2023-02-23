/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0B0B0B",
        white: "#FFFEFD",
        yellow: "#FFAC30",
        blue: "#64BCFF",
      },
    },
  },
  plugins: [],
};
