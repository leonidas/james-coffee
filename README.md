# Synopsis

CoffeeScript to JavaScript transformer for [James.js](https://github.com/leonidas/james.js).

```coffeescript
# Jamesfile

james  = require 'james'
coffee = require './index'

module.exports = tasks = {}

tasks.default = ->
  james.files('src/**/*.coffee')
    .map(coffee)
    .onValue james.write

tasks.watch   = -> james.watch('src/**/*.coffee').onValue tasks.default
```
