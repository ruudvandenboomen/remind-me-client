/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Linotte Regular", "sans-serif"]
    },
    colors: {
      'beige': '#dfd7da',
      'light-beige': '#fbf7f6',
      'orange': '#f47a56',
      'light-orange': '#fae9e4 ',
    }
  },
  plugins: [],
}



