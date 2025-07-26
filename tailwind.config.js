/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jade-green': '#22c55e',
        'democratic-red': '#dc2626',
      }
    },
  },
  plugins: [],
}
