/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-pink-##BA4270": "#BA4270",
        "water-white-#E1E1E1": "#E1E1E1",
        "sanjuan-blue-#36536B": "#36536B",
        "mirage-blue-#1B262F": "#1B262F",
        "charm-pink-#DA6D97": "#DA6D97",
        "lightsanjuan-blue-#6C8294": "#6C8294",
      },
      fontFamily: {
        dm: ["DM Serif Display", "serif"],
        publicSans: ["Public Sans", "sans-serif"],
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
