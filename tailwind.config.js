/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        // Paleta de colores del tema oscuro
        dark: {
          background: '#0F1215',
          text: '#F5F5F5',
          primary: '#4A90E2',
          secondary: '#E91E63',
          componentBg: '#3A3A3A',
          secondaryText: '#B0BEC5',
        },
        // Paleta de colores del tema claro
        light: {
          background: '#FAF9F6',
          text: '#2C2C2C',
          primary: '#3498DB',
          secondary: '#E67E22',
          componentBg: '#F8F8F8',
          secondaryText: '#7F8C8D',
        },
      },
    },
  },
  plugins: [],
}