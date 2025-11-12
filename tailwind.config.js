/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 1960s Airport Flipboard Palette
        'flipboard': {
          'dark': '#0F1115',      // Deep charcoal (background)
          'gold': '#C8A96A',      // Warm gold (accent)
          'teal': '#2E8A8C',      // Retro teal (secondary)
          'cream': '#F8F6ED',     // Off-white cream (text)
          'orange': '#E8A76A',    // Warm orange (highlights)
          'navy': '#1A2332',      // Deep navy (cards)
        },
      },
      fontFamily: {
        'retro': ['Courier New', 'monospace'],
        'display': ['Georgia', 'serif'],
      },
      animation: {
        'flip': 'flip 0.6s ease-in-out',
        'flip-fast': 'flip 0.3s ease-in-out',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0deg)', opacity: '1' },
          '50%': { transform: 'rotateX(90deg)', opacity: '0.5' },
          '100%': { transform: 'rotateX(0deg)', opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(200, 169, 106, 0.7)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 0 10px rgba(200, 169, 106, 0)' },
        },
      },
      boxShadow: {
        'retro': '4px 4px 0px rgba(0, 0, 0, 0.3)',
        'retro-lg': '8px 8px 0px rgba(0, 0, 0, 0.3)',
        'glow': '0 0 20px rgba(200, 169, 106, 0.5)',
      },
      spacing: {
        'flip-gap': '2px',
      },
    },
  },
  plugins: [],
}

