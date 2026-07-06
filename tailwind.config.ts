import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{svelte,js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        'void': '#000000',
        'event-horizon': '#1a1a2e',
        'accretion': '#ff6b35',
        'radiation': '#f7b801',
        'cosmic': '#6b0000',
        'dark-matter': '#0f3460',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255, 107, 53, 0.5)' },
          '50%': { textShadow: '0 0 40px rgba(255, 107, 53, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
