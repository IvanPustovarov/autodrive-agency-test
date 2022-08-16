/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': "#3fbb41",
        'red': "#ea4747",
        'gray': "#ceb7b7"
      }
    },
  },
  plugins: [],
}
