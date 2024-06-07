/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        increment: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        decrement: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.8)' },
        },
      },
      animation: {
        increment: 'increment 0.3s ease-out',
        decrement: 'decrement 0.3s ease-out',
      },
      backgroundImage: {
        'hero-pattern': "url('/desenfocada.png')",
        'footer-texture': "url('/desenfocada.png')",
      }
    },
  },
  plugins: [],
}