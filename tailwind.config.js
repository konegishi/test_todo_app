module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: () => ({
        'blueGray-100': '#f1f5f9',
        'blueGray-800': '#1e293b',
      }),
      animation: () => ({
        'spin-slow': 'spin 2s linear infinite',
      })
    },
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
