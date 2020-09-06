process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/kickstarter-updates-navigator/'
      : '/',
  transpileDependencies: [
    "vuetify"
  ]
}