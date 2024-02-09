/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#202632",
        layoutBg: "#313A49",
        brand: "#4DD999",
      },
      boxShadow: {
        "3xl": "0 0px 50px -15px  rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
