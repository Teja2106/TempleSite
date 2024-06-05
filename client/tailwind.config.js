/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'phone': { min: "360px", max: "640px" },
      'tab': { min: "768px", max: "1180px" },
      'laptop': '1280px',
      'pc': '1920px',
    },
    extend: {},
  },
  plugins: [],
}

