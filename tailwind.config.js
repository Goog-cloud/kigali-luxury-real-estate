/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    animation: {
      'slide-left': 'slideLeft 60s linear infinite',
      'slide-right': 'slideRight 60s linear infinite',
      'scroll': 'scroll 30s linear infinite',
    },
    keyframes: {
      slideLeft: {
        from: { transform: 'translateX(10)' },
        to: { transform: 'translateX(-50%)' }
      },
      slideRight: {
        from: { transform: 'translateX(-50%)' },
        to: { transform: 'translateX(0)' }
      },
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' }
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
};
export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      '.pause': {
        'animation-play-state': 'paused',
      }
    })
  }
];