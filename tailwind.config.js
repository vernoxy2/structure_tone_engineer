/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#ECBD17",
        textcolor: "#162C3E",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
       keyframes: {
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
          "100%": { borderColor: "white" },
        },
      },
      animation: {
        typing: "typing 2s steps(10) infinite alternate, blink 0.10s infinite",
      },
    
    },
  },
  plugins: [],
};
