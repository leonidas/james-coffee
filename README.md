# Synopsis

CoffeeScript to JavaScript transformer for [James.js](https://github.com/leonidas/james.js).

```coffeescript
james  = require 'james'
coffee = require 'james-coffee'

module.exports = tasks = {}

tasks.default = ->
  james.files('src/**/*.coffee')
    .map(coffee)
    .onValue james.write

```
