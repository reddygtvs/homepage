/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/router.tsx",
    "./index.html",
    "./src/blogs/sample-blog.mdx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
