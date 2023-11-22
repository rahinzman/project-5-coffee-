/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#343434'
      },
      boxShadow: {
        'md': '0.5px 0.5px 5px 0px rgba(255, 254, 254, 0.5),-0.5px -0.5px 5px 0px rgba(255, 254, 254, 0.5)',
      }
    },
  },
  plugins: [],
}

