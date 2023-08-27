/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade': 'pulseFade 8s ease-in-out',
      },
      keyframes: {
        pulseFade: {
          '0%': { opacity: '0.25' },
          '20%': { opacity: '0.5' },
          '40%, 60%': { opacity: '1' },
          '80%': { opacity: '0.5' },
          '100%': { opacity: '0.12' }
        },
      },
    },
  },
  plugins: [],
}
