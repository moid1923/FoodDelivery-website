/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
