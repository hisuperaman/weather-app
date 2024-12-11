/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#F2F6FC",
          secondary: "#E6EDF5",
          text: "#4A4F55",
          textActive: "black",
          buttonWithText: "#007BFF",
          logo: '#d9d9d9'
        },
        dark: {
          primary: '#202B3B',
          secondary: '#0B131E',
          text: '#8F959D',
          textActive: '#C3CAD5',
          buttonWithText: '#0195FF',
          logo: '#3B4452'
        }
      },
      borderRadius: {
        medium: '1rem',
        small: '0.5rem'
      },
      padding: {
        medium: '1.2rem',
        small: '0.8rem',
        large: '1.8rem'
      },
      gap: {
        medium: '1.2rem',
        small: '0.8rem'
      },
      fontFamily: {
        rubik: ["Rubik", 'sans-serif']
      }
    },
  },
  plugins: [],
}