module.exports = {
  devServer: {
    proxy: {
      '^/recipe': {
        target: 'http://localhost:5000',
        ws: true,
        changeOrigin: true,
      }
}
},
"transpileDependencies": [
  "vuetify"
]

}