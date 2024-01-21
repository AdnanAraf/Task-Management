/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFF",
      gray: "#1f2937",
      yellow: "#fef08a",
      red: "#b91c1c",
      blue: "#38BDF8",
      primary: {
        500: "#2E90FA",
        600: "#1570EF",
      },
    },
    extend: {},
  },
  plugins: [],
};
