/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf7ef",
          100: "#faebd7",
          200: "#f5d6b3",
          300: "#eeba83",
          400: "#e69451",
          500: "#e0782f",
          600: "#d16025",
          700: "#ae4920",
          800: "#8b3c21",
          900: "#70331e",
          950: "#3c180e",
        },
        // accent: {
        //   50: "#FAF5F0",
        //   100: "#F4ECE1",
        //   200: "#E8D6BF",
        //   300: "#DDC2A2",
        //   400: "#D2AF84",
        //   500: "#C69963",
        //   600: "#B78343",
        //   700: "#926835",
        //   800: "#6C4D28",
        //   900: "#4B351B",
        //   950: "#382814",
        // },
      },
      fontFamily: {
        inter2: ["Inter", "sans-serif"],
        calistoga2: ["Calistoga", "sans-serif"],
        poppins2: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
