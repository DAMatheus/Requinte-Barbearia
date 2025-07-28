export default {
  content: [
    "./index.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        cardUp: 'cardUp 1s ease-in-out infinite'
      },
      keyframes: {
        cardUp: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
          '100%': { transform: 'translateY(-5px)' }
        }
      }
    }
  },
  plugins: [
    import('flowbite/plugin')
  ],
}
