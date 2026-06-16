/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F6764",
        background: "#F8F8F8",
      },

      fontFamily: {
        heading: ["Playfair Display"],
        body: ["Inter"],
      },
    },
  },
  plugins: [],
}