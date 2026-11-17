/** Brand colours + fonts live here and are reused everywhere via Tailwind classes. */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF3FF',
          100: '#DCE6FD',
          500: '#2563EB', // logo blue
          600: '#1D4ED8',
          700: '#1E3A8A',
          800: '#16285C',
          900: '#101C3D', // logo navy – main brand colour
        },
        // accent = logo blue, used for buttons, links and icons (white text on 600 = AA contrast)
        accent: {
          50: '#EFF4FF',
          100: '#DBE6FE',
          200: '#BFD3FD',
          300: '#93B4FB',
          500: '#3B82F6',
          600: '#2563EB', // logo blue, white text on this = 5.2:1
          700: '#1D4ED8',
        },
        // gold = the logo's spark: badges and highlights. Use navy text on gold-400/100, never white.
        gold: {
          100: '#FEF3C7',
          400: '#FBBF24',
          500: '#F59E0B', // logo gold
        },
        // Theme-aware colours: values come from CSS variables in src/index.css (light + .dark)
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        card: 'rgb(var(--c-card) / <alpha-value>)',
        cream: 'rgb(var(--c-cream) / <alpha-value>)',
        alt: 'rgb(var(--c-alt) / <alpha-value>)',
        tint: 'rgb(var(--c-tint) / <alpha-value>)',
        line: 'rgb(var(--c-line) / <alpha-value>)',
        head: 'rgb(var(--c-head) / <alpha-value>)',
        link: 'rgb(var(--c-link) / <alpha-value>)',
        ink: 'rgb(var(--c-ink) / <alpha-value>)',
        muted: 'rgb(var(--c-muted) / <alpha-value>)', // AA on surface in both themes
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
