/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      screens: {
        ws: { raw: "(min-aspect-ratio: 3/2)" },
        ts: { raw: "(max-aspect-ratio: 1/2)" },
        sml: "300px",
        ls: "724px",
        mls: "800px",
      },
    },
  },
  plugins: [],
};
