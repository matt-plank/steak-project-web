/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Pink-brown gradient of steak temperatures
      backgroundColor: {
        rare: "#A52A2A",
        "mid-rare": "#d66e60",
        medium: "#ebb1a9",
        "mid-well": "#b36850",
        well: "#a14223",
      },
    },
  },
  plugins: [],
};
