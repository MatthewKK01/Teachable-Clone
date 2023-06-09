/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        shamrock: {
          50: "#f4fdfa",
          100: "#e9faf5",
          200: "#c8f3e6",
          300: "#a6ebd7",
          400: "#64dcba",
          500: "#21CD9C",
          600: "#1eb98c",
          700: "#199a75",
          800: "#147b5e",
          900: "#0f5c46",
          950: "#083327",
        },
      },
      fontFamily: {
        basisMedium: "'BasisProMedium',sans-serif",
        basisRegular: "'BasisProRegular',sans-serif",
        reckless: "'RecklessNeueLight',sans-serif",
        
      
      },
    },
  },
  plugins: [],
};
