/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'about': "url('./assets/about-1.jpg')",
      }
    },
  },
  plugins: [],
}

