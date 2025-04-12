/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFD700',
          dark: '#FFC700',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          light: '#2A2A2A',
        }
      },
      fontFamily: {
        cabinet: ['Cabinet Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};