module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'barber-gold': '#D4A574',
        'barber-dark': '#1A1A1A',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Poppins', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}