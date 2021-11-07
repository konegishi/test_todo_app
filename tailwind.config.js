module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['checked', 'disabled'],
      borderColor: ['checked'],
      textDecoration: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
