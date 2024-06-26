/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,vue}',
    './components/**/*.{js,ts,jsx,tsx,vue}',
    './pages/**/*.{ts,tsx,vue}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        primary: {
          100: '#facaf2',
          200: '#f696e5',
          300: ' #f162d9',
          400: '#ed2ecc',
          500: '#990d81',
          600: '#680858'
        },
        light: {
          50: '#ffffff22',
          100: '#ffffff55',
          200: '#ffffff88',
          300: '#FDFDFD',
          400: '#CACACA',
          500: '#CACACA33'
        },
        dark: {
          100: '#101210'
        }
      }
    }
  },
  plugins: []
}
