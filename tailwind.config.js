const nativewind = require('tailwindcss-react-native/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", 
    "./src/screen/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [nativewind],
}

