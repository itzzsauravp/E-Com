/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
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
        darkMode: "#2A2A2A",
      },
      screens: {
        sm: "360px",
        md: "700px",
      },
    },
  },
  plugins: [],
};
