module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel decorative': ['Cinzel Decorative', 'serif'],
        'inter':    ['Inter', 'sans-serif'],
      },
      colors: {
        greygreen: '#828E80',
        dirt: '#85733C',
        beige: '#7D7251',
        black: '#1B171B',
        graywhite: '#F3F2F0',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
}