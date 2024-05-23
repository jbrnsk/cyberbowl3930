/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '40px',
      '5xl': '50px',
      '6xl': '60px',
      '7xl': '70px'
    },
    screens: {
      'sm': '641px',
      'md': '769px',
      'lg': '1025px',
      'xl': '1281px',
    },
    extend: {
      colors: {
        cyber: {
          silver: '#C0C0C0',
          slate: '#708090',
          'dark-slate': '2F4F4F',
          bronze: '#777777',
          blue: '#00FFFF',
          green: '#39FF14',
          gray: '#2F4F4F',
          purple: '#8A2BE2',
          pink: '#FF69B4',
          yellow: '#FFD700',
          chrome: '#B8B8B8'
        }
      }
    }
  },
};