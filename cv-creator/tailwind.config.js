/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      'secondary': '#181717',
    },
    extend: {
      fontFamily: {
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

