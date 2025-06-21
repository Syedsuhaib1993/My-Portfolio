/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        keyframes: {
        backInUp: {
          '0%': {
            transform: 'translateY(80px) scale(0.7)',
            opacity: '0',
          },
          '80%': {
            transform: 'translateY(-10px) scale(1.05)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
          },
        },
         fadeInScale: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation:{
        backInUp: 'backInUp 0.6s ease-out',
        fadeInScale: 'fadeInScale 0.8s ease-out',
      },
    },
  },
  plugins: [],
};
