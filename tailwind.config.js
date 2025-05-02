/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'cookie': ['Cookie', 'cursive']
      },
      colors: {
        amber: {
          400: '#feb47b',
          500: '#ff7e5f',
          600: '#aa6f3c',
        }
      },
      animation: {
        float: 'float 15s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-in-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(5deg)' },
          '50%': { transform: 'translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateY(15px) rotate(-5deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at 25% 25%, rgba(255, 126, 95, 0.2) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
};