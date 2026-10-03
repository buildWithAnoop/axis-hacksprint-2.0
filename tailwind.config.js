/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wonderland: {
          darkest: '#080608',
          dark: '#120A0D',
          plum: '#1A0B10',
          velvet: '#240E17',
          crimson: '#A71930',
          ruby: '#C51F3A',
          rose: '#E63956',
          cream: '#F4E6CE',
          parchment: '#E8D5B5',
          gold: '#C9A45C',
          brightgold: '#E5BE6E',
          forest: '#18251D',
          emerald: '#0D1912',
          border: 'rgba(244, 230, 206, 0.12)',
          glow: 'rgba(197, 31, 58, 0.45)'
        }
      },
      fontFamily: {
        display: ['Cinzel', 'Cormorant Garamond', 'serif'],
        serif: ['"Cormorant Garamond"', 'Cinzel', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Grotesk"', 'monospace']
      },
      backgroundImage: {
        'wonderland-gradient': 'radial-gradient(circle at 50% 20%, #240E17 0%, #120A0D 45%, #080608 100%)',
        'crimson-glow': 'radial-gradient(circle at center, rgba(197, 31, 58, 0.25) 0%, transparent 70%)',
        'gold-glow': 'radial-gradient(circle at center, rgba(201, 164, 92, 0.2) 0%, transparent 65%)',
        'checker-pattern': 'linear-gradient(45deg, #120A0D 25%, transparent 25%), linear-gradient(-45deg, #120A0D 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #120A0D 75%), linear-gradient(-45deg, transparent 75%, #120A0D 75%)'
      },
      boxShadow: {
        'crimson-sm': '0 0 15px rgba(197, 31, 58, 0.3)',
        'crimson-lg': '0 0 35px rgba(197, 31, 58, 0.5)',
        'gold-sm': '0 0 15px rgba(201, 164, 92, 0.3)',
        'gold-lg': '0 0 30px rgba(201, 164, 92, 0.45)',
        'parchment-glow': '0 0 20px rgba(244, 230, 206, 0.25)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'spin-very-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        }
      }
    },
  },
  plugins: [],
}
