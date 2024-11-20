import animatePlugin from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#0E0C15',
        secondary: '#121825',
      },
      colors: {
        green: '#1ABB34',
        red: '#FE4242',
        gray: {
          100: '#616D8D',
          200: '#9CA3AF',
        },
        primary: '#0E0C15',
      },
      fontFamily: {
        sans: ['Arial-Regular'],
      },
      borderRadius: {
        primary: '17px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderColor: {
        primary: '#222B44',
      },
      screens: {
        tablet: {
          max: '835px',
        },
        'mini-tablet': {
          max: '740px',
        },
        phone: {
          max: '400px',
        },
        'md-phone': {
          max: '600px',
        },
      },
    },
  },
  plugins: [animatePlugin],
}
