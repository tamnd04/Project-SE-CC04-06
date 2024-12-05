/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx, tsx, html,mdx}",
    "./src/**/*.js,ts,jsx,tsx,html,mdx}",
    "./src/*.jsx",
    "./index.html",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: { 900: "var(--black_900)", "900_3f": "var(--black_900_3f)" },
        blue: { 600: "var(--blue_600)" },
        gray: {
          800: "var(--gray_800)",
          "800_99": "var(--gray_800_99)",
          "800_cc": "var(--gray_800_cc)",
        },
        indigo: { 900: "var(--indigo_900)" },
        white: { a700: "var(--white_a700)" },
      },
      boxShadow: {},
      fontFamily: { arial: "Arial" },
      textShadow: { ts: "0px 4px 4px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
