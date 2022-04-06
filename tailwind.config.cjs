module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#ffffff',
        accent: '#f9f614',
        error: '#e86f68',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Helvetica', 'sans-serif'],
      },
      keyframes: {
        wiggle: {
          '0%, 50%, 100%': { transform: 'translateX(0)' },
          '60%': { transform: 'translateX(10px)' },
          '70%': { transform: 'translateX(-10px)' },
          '80%': { transform: 'translateX(10px)' },
          '85%': { transform: 'translateX(-5px)' },
          '90%': { transform: 'translateX(5px)' },
          '95%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s linear forwards',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
