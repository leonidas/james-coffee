# Synopsis

CoffeeScript to JavaScript transformer for [James.js](https://github.com/leonidas/james.js).

```coffeescript
james  = require 'james'
coffee = require('james-coffee').createStream

module.exports = tasks = {}

tasks.default = ->
  james.list 'src/**/*.coffee', (files) ->
    files.forEach (file) ->
      james.read(file)
        .pipe(coffee bare: true)
        .pipe james.write file.replace 'src', 'dist'

```

## API

`createStream(options)` Returns a new CoffeeScript compiler pipe with given options.

```
literate:   boolean : Expect literate CoffeeScript instead of regular.
bare:       boolean : Don't wrap source to a closure.
header:     boolean : Print "// Compiled with CoffeeScript 1.x" on top of the compiled js file.

// TODO:
sourceMap:  boolean : Produce source map
```
