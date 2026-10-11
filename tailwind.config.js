/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        'ab-navy': '#102A43',
        'ab-navy-dark': '#0d2238',
        'ab-navy-light': '#1f4266',
        'ab-gold': '#B59A62',
        'ab-gold-light': '#d9c393',
        'ab-gold-soft': '#efe5cf',
        'ab-gold-bright': '#E7C984',
        'ab-bg': '#f7f5f0',
        'ab-card': '#fffdf8',
        'ab-cyan': '#0cbaef',
        'ab-red': '#d0021b',
        'ab-border': '#d9cba8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        round: ['Mulish', 'sans-serif'],
        sans: ['"PT Sans"', 'Open Sans', 'sans-serif'],
      },
      keyframes: {
        shake: {
          '0%, 70%, 100%': { transform: 'rotate(0deg)' },
          '74%': { transform: 'rotate(-14deg)' },
          '78%': { transform: 'rotate(12deg)' },
          '82%': { transform: 'rotate(-10deg)' },
          '86%': { transform: 'rotate(8deg)' },
          '90%': { transform: 'rotate(-4deg)' },
          '94%': { transform: 'rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(181, 154, 98, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(181, 154, 98, 0)' },
        }
      },
      animation: {
        shake: 'shake 3s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2s infinite',
      }
    },
  },
  plugins: [],
};
