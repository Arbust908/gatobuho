// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.vue', './src/**/*.ts'],
  },
  theme: {
    extend: {
      colors: {
        ...colors,
        main: {
          100: '#f7b0c4',
          200: '#f898b3',
          300: '#f681a2',
          400: '#ee6b90',
          500: '#de577d',
          600: '#c4466a',
          700: '#a33655',
          800: '#7c2840',
          900: '#501b2a',
        },
        second: {
          100: '#e7e6f5',
          200: '#ceceea',
          300: '#b6b5dc',
          400: '#9d9cca',
          500: '#8483b4',
          600: '#6a6997',
          700: '#504f76',
          800: '#353551',
          900: '#1b1a29',
        },
        accent: {
          100: '#dcfffb',
          200: '#bafff5',
          300: '#9affec',
          400: '#7cf8dd',
          500: '#61e4c8',
          600: '#49c5aa',
          700: '#349c86',
          800: '#216c5c',
          900: '#10372f',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        serif: ['DM Serif Text', ...defaultTheme.fontFamily.serif],
      },
      transitionTimingFunction: {
        main: 'cubic-bezier(.17,.67,.65,1.35)',
      },
      animation: {
        boing: 'boing 0.5s ease-in-out',
        'boing-light': 'boing-light 0.3s ease-in-out',
      },
      keyframes: {
        boing: {
          '0%': {
            transform: 'scale(1)',
          },
          '75%': {
            transform: 'scale(1.1)',
          },
          '90%': {
            transform: 'scale(0.9)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
        'boing-light': {
          '0%': {
            transform: 'scale(1)',
          },
          '75%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
