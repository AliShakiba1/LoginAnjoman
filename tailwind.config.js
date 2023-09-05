/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './index.html',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'persian-blue': {
          50: '#ebf5ff',
          100: '#dbebff',
          200: '#bfdaff',
          300: '#98c1ff',
          400: '#6f9bff',
          500: '#4e75ff',
          600: '#2e4bfd',
          700: '#2239e0',
          800: '#2137c0',
          900: '#22338d',
          950: '#141c52',
        },

        'persian-blue-dark': '#303952',
        loghman: '#FBB040',
        'gray-low': 'rgba(255, 255, 255, 0.42)',
        'btn-gray-low': '#5481A5',
        'cancel-Status': '#CC5D7C',
        'ongoing-Status': '#61C48B',
        'uncertain-Status': '#34495E',
        headLine: '#566879',
        'news-Items': '#3C6382',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
