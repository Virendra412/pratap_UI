/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#f6f2ef',
        'custom-textColor': '#2d312a',
        

      }
    },
  },
  plugins: [],
}