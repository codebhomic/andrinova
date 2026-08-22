/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B1E48',
          gold: '#B58A38',
          purple: '#2D0B6B',
          orange: '#FF6A00',
        }
      }
    },
  },
  plugins: [],
}