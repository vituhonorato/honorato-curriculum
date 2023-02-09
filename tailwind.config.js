/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily:{
      sans: ['"Titillium Web"'],
      righteous: ['"Righteous"']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue': '#001542',
      'green':'#0CF25D',
      'yellow':'#FF9933',
      'midnight': '#2f2435',
      'orange': '#FF6B1A',
      'gray': '#4B4952',
      'tahiti':'#3ab7bf',
      'graylight': '#CACACA',
      'bubble-gum': '#ff77e9',
      'red': '#dc2626',
    },
    extend: {},
  },
  plugins: [],
}
