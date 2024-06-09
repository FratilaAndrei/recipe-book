/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "dancing-script": ["Dancing Script", "cursive"],
    },
    backgroundImage: {
      backgroundCarrousel: "url('/src/utils/images/backgroundCarrousel.png')",
      tdeeBackground: "url('/src/utils/images/TdeeCalcImage.png')",
      heroImg: "url('/src/utils/images/HeroImage.png')",
    },
    extend: {},
  },
  plugins: [],
};
