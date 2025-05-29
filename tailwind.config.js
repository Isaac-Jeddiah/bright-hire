module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Example primary color
        secondary: '#FBBF24', // Example secondary color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};