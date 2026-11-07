/** Brand colours + fonts live here and are reused everywhere via Tailwind classes. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF5FB',
          100: '#D9E8F5',
          500: '#1F6FB2',
          600: '#175A92',
          700: '#124A78',
          800: '#0F3A5E',
          900: '#0A2742', // deep navy – main brand colour
        },
        accent: {
          50: '#FFF3EB',
          100: '#FFE0CC',
          500: '#EA580C',
          600: '#C2410C', // white text on this = AA contrast (5.2:1)
          700: '#9A3412',
        },
        cream: '#FFF9F3',
        ink: '#1B2733',
        muted: '#475467', // AA on white and cream
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(10,39,66,0.18)',
      },
    },
  },
  plugins: [],
}
