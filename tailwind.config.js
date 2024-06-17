module.exports = {
  content: ["./src/components/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'Image1': "url('/Image1.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        customBgColorHSL: "rgb(8 84 132)", 
        customBgColorHex: "#fcf2cc", 
        customBgColor: "#fffae6",
      },
    },
  },
  plugins: [],
};