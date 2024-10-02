/** @type {import('tailwindcss').Config} */
export default {
  content: [
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#282828",
        secondaryColor: "#F2F2F0",
        hlColor: "#21A5D1"
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

