/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '300px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'product-sans':  ['"Poppins"', 'sans-serif'],
        'product-sans-m': ['"Inter"', 'sans-serif'],
      },
      colors: {
        'custom-red': '#FF2B51',
        'custom-black' : '#1f1f1f',
      },
      boxShadow: {
        glow: '0 0px 20px #E40037, 0 0px 55px #E40037, inset 0 0px 20px #FF2B51,inset 0 0px 5px #FF2B51',
      },
    },
  },
  plugins: [],
}
