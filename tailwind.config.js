/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        main: "0px 0px 0px 4px #E3E3E340",
      },
    },
  },
  plugins: [],
};
