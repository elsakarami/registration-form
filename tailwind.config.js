/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      poppinsRegular: ["PoppinsRegular", "sans-serif"],
      poppinsSemiBold: ["PoppinsSemiBold", "sans-serif"],
      poppinsSemiBoldItalic: ["PoppinsSemiBoldItalic", "sans-serif"],
      poppinsItalic: ["PoppinsItalic", "sans-serif"],
    },
    container: {
      center: true,
    },
    extend: {
      screens: {
        xs: { max: "375px" },
        sm: { min: "375px", max: "641px" },
        md: { min: "641px", max: "1024px" },
        lg: { min: "1025px" },
      },
      colors: {
        acbPrimary: '#2E598E',
        acbSecondary: '#2E3A4F',
        acbWarning: '',
        acbSuccess: '',
        acbError: '',
        acbGray:'#F0F0F5'
      },
    },
  },
  plugins: [],
};
