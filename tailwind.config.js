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
          100: 'var(--main-100)',
          200: 'var(--main-200)',
          300: 'var(--main-300)',
          400: 'var(--main-400)',
          500: 'var(--main-500)',
          600: 'var(--main-600)',
          700: 'var(--main-700)',
          800: 'var(--main-800)',
          900: 'var(--main-900)',
        },
        accent: {
          light: 'var(--accent-light)',
          DEFAULT: 'var(--accent)',
          dark: 'var(--accent-dark)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
        serif: ['DM Serif Text', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
