var template = 'http://files.tmdb.org/p/exports/{type}_ids_{mm}_{dd}_{yyyy}.json.gz'

var alias = {
  'movies': 'movie',
  'tv': 'tv_series',
  'series': 'tv_series',
  'shows': 'tv_series',
  'people': 'person',
  'collections': 'collection',
  'networks': 'tv_network',
  'keywords': 'keyword',
  'companies': 'production_company',
}

module.exports = latest

function latest (t) {
  var now = new Date

  // Daily updates are available by 8am UTC
  if (now.getUTCHours() < 8) now.setUTCDate(now.getUTCDate() - 1)

  var dd = now.getUTCDate()
  var mm = now.getUTCMonth() + 1
  var yyyy = now.getUTCFullYear()
  if (dd < 10) dd = '0' + dd
  if (mm < 10) mm = '0' + mm

  var type = t.toLowerCase()

  return template
    .replace('{type}', alias[type] || type)
    .replace('{dd}', dd)
    .replace('{mm}', mm)
    .replace('{yyyy}', yyyy)
}
