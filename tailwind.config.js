/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-beige': 'rgba(251, 247, 239, 1)',
        'custom-card': 'rgba(253, 241, 217, 1)',
      },
    },
  },
  plugins: [],
};