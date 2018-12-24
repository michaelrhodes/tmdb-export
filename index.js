var parse = require('fast-json-parse')
var pumpify = require('pumpify')
var through = require('through2')
var fetch = require('./fetch')
var latest = require('./latest')

module.exports = tmdb

function tmdb (type, raw) {
  return pumpify.obj(
    fetch(latest(type)),
    objectify()
  )
}

function objectify () {
  return through.obj(function (buf, enc, next) {
    var obj = parse(buf.toString())
    obj.err ? next(obj.err) : next(null, obj.value)
  })
}
