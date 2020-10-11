module.exports = {
  devServer: {
    proxy: {
      '^/recipe': {
        target: 'http://localhost:4000',
        ws: true,
        changeOrigin: true
  }
}
},
"transpileDependencies": [
  "vuetify"
]

}