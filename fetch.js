var http = require('http')
var zlib = require('zlib')
var pumpify = require('pumpify')
var split = require('split2')

module.exports = fetch

function fetch (url) {
  var stream = pumpify()

  http.get(url, function (res) {
    if (res.statusCode !== 200) {
      stream.destroy(new Error(res.statusCode + ' ' + url))
      return
    }

    stream.setPipeline(zlib.createGunzip(), split())
    res.pipe(stream)
  })

  return stream
}
