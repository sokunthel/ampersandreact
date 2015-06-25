var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  port: '4000',
  clearBeforeBuild: true
})
