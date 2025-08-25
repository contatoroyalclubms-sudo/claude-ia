/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Supreme Neon Colors
        'neon-blue': '#00D4FF',
        'neon-purple': '#8B00FF',
        'neon-pink': '#FF0080',
        'neon-green': '#00FF88',
        'neon-yellow': '#FFD700',
        'neon-orange': '#FF8C00',
        'neon-red': '#FF0044',
        'neon-cyan': '#00FFE5',
        // Dark Theme
        'dark-bg': '#0A0A0B',
        'dark-card': '#1A1A1B',
        'dark-border': '#2A2A2B',
        'glass-card': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-supreme': 'linear-gradient(135deg, #00D4FF 0%, #8B00FF 25%, #FF0080 50%, #00FF88 100%)',
        'gradient-purple-pink': 'linear-gradient(135deg, #8B00FF 0%, #FF0080 100%)',
        'gradient-blue-purple': 'linear-gradient(135deg, #00D4FF 0%, #8B00FF 100%)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(139, 0, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 128, 0.5)',
        'neon-green': '0 0 20px rgba(0, 255, 136, 0.5)',
      },
      backdropBlur: {
        'glass': '16px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-neon': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      fontFamily: {
        'supreme': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}