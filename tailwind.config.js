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
      fontFamily: {
        'sans': ['var(--font-inter)', 'sans-serif'],
        'serif': ['var(--font-playfair)', 'serif'],
        'cursive': ['var(--font-caveat)', 'cursive'],
        'handwriting': ['var(--font-halimun)', 'cursive'], // Halimun local font for sticky note
      },
      colors: {
        'custom-red': '#FF2B51',
        'custom-black': '#0a0a0a',
        'off-white': '#f8f9fa',
        'accent-green': '#00ff00',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
      },
      boxShadow: {
        'glow': '0 0px 20px rgba(255, 43, 81, 0.5)',
      },
    },
  },
  plugins: [],
}
