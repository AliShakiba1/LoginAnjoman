/** @type {(tailwindConfig: object) => object} */
import withMT from '@material-tailwind/react/utils/withMT'

export default withMT({
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './index.html',
    'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
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
    },
  },
  plugins: [],
})
