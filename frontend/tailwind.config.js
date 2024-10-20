/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        arimo: ["Arimo", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        tDark: "#1D1D1D",
        tLight: "#555555",
        eSmoke: "#FBFBFB",
        eSmokePlus: "#E8E8E8",
        etBlue: "#024E82",
      },
      screens: {
        sm: "360px",
        md: "700px",
      },
    },
  },
  plugins: [],
};
