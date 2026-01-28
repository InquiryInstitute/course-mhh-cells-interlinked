/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Orbitron', 'sans-serif'],
        'body': ['JetBrains Mono', 'monospace'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'season-primary': '#f43f5e', // rose-500
        'season-secondary': '#e11d48', // rose-600
      },
    },
  },
  plugins: [],
};
