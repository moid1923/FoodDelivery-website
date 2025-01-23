/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px',   // Extra small devices
        'sm': '600px',   // Small screens
        'md': '900px',   // Medium screens
        'lg': '1030px',  // Large screens
        'xl': '1320px',  // Extra-large screens
        '3xl': '1600px', // Extra wide screens
      },
      colors: {
        primary: "#ff5331",
        sub:"#ffefec",
        feedbackBtn:"#e2e2e2",
        cardsBg:"#fafafa",
      },
    },
  },
  plugins: [],
};
