module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondspin-green': {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        'secondspin-amber': {
          400: '#fbbf24',
          500: '#f59e0b',
        }
      }
    },
  },
  plugins: [],
}