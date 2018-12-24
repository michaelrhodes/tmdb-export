# tmdb-export

a little utility for consuming [daily file exports](https://developers.themoviedb.org/3/getting-started/daily-file-exports) from [TMDb](https://themoviedb.org)

## install
```sh
npm install michaelrhodes/tmdb-export#1.0.0
```

## use
```js
var tmdb = require('tmdb-export')

tmdb('movies')
  .on('error', console.error)
  .on('data', function (movie) {
    typeof movie === 'object'
    typeof movie.id === 'number'
    typeof movie.original_title === 'string'
    typeof movie.popularity === 'number'
    typeof movie.video === 'boolean'
    typeof movie.adult === 'boolean'
  })

// Consume the raw string data
var fetch = require('tmdb-export/fetch')
var latest = require('tmdb-export/latest')

fetch(latest('movies'))
  .on('error', console.error)
  .on('data', function (movie) {
    typeof movie === 'string'
  })

// Or go your own way
latest('movies')
// => 'http://files.tmdb.org/p/exports/movie_ids_DD_MM_YYYY.json.gz'
```

## obey
[MIT](https://opensource.org/licenses/MIT)
