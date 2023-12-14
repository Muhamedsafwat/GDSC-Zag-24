/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhite: "hsl(0, 0%, 94%)",
        lightgrey: "hsl(0, 0%, 86%)",
        smokeygrey: "hsl(0, 1%, 44%)",
        offblack: "hsl(0, 0%, 8%)",
        brandpuurble: "#844FFA",
      },
    },
  },
  plugins: [],
};
