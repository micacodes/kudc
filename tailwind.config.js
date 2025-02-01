/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Make sure Tailwind scans the right files
  theme: {
    extend: {
      colors: {
        mustard: '#FFDB58',
        blue: {
          900: '#003366',
        },
      },
    },
  },
  plugins: [],
};
