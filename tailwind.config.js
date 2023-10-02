const colors = require('tailwindcss/colors')
module.exports = {
    content: ['./public/**/*.html', './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}'],
    plugins: [require('@tailwindcss/typography')],
    theme: {
      extend: {
        colors: {
          green: colors.emerald,
          yellow: colors.amber,
          purple: colors.violet,
        }
      },
    },
  };