/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ["SpaceMono", "monospace"],
        poppins: ["Poppins", "sans-serif"],
      },
      scale: {
        200: "2",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["responsive", "hover", "focus", "group-hover"],
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    },
  },
  plugins: [],
};
