james  = require 'james'
coffee = require 'coffee-script'

module.exports = james.transformer (file) ->
  content: coffee.compile file.content
  name:    file.name.replace /.coffee$/, '.js'

