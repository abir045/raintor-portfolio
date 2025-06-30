/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector", // Use 'selector' for manual dark mode toggle
  theme: {
    extend: {
      // Your custom theme extensions go here
    },
  },
  plugins: [],
};
