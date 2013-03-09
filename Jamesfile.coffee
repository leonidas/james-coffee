james  = require 'james'
coffee = require './index'
Q      = require 'q'

module.exports = tasks = {}

tasks.default = -> james.files('src/**/*.coffee').map(coffee).onValue james.write

tasks.watch   = -> james.watch('src/**/*.coffee').onValue tasks.default
