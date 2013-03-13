# Synopsis

CoffeeScript to JavaScript transformer for [James.js](https://github.com/leonidas/james.js).

```coffeescript
james  = require 'james'
coffee = require 'james-coffee'

james.task('coffee', ->

  james.list('src/**/*.coffee').forEach (file) ->
    james.read(file)
      .transform(coffee bare: true)
      .write process.stdout

```

## API

`coffee(options)`: Returns a new CoffeeScript compiler pipe with given options. Options are (kind of) documented at
the [CoffeeScript annotated source](http://coffeescript.org/documentation/docs/coffee-script.html).
