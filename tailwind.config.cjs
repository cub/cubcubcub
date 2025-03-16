/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      cursive: ['Gochi Hand', 'cursive'],
      mono: ['monospace']
    },
    extend: {
      dropShadow: {
        DEFAULT: ['0 2px 0 #000', '0 4px 0 #000']
      }
    }
  },
  plugins: []
};
