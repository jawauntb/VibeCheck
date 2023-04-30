/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        cycling: 'cycling 4s linear infinite',
      },
      keyframes: {
        cycling: {
          '0%': { content: '"😎"' },
          '25%': { content: '"🔥"' },
          '50%': { content: '"🥶"' },
          '75%': { content: '"🪩"' },
          '100%': { content: '"🌴"' },
        },
      },
      boxShadow: {
        '2': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}


module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        cycling: 'cycling 4s linear infinite',
      },
      keyframes: {
        cycling: {
          '0%': { content: '"😎"' },
          '25%': { content: '"🔥"' },
          '50%': { content: '"🥶"' },
          '75%': { content: '"🪩"' },
          '100%': { content: '"🌴"' },
        },
      },
      boxShadow: {
        '2': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
