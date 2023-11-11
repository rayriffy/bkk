import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        js: '#efda4d'
      },
      fontFamily: {
        sans: ["'Noto Sans Thai Variable'", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
