(function() {
  var coffee, james;

  james = require('james');

  coffee = require('coffee-script');

  module.exports = james.transformer(function(file) {
    return {
      content: coffee.compile(file.content),
      name: file.name.replace(/.coffee$/, '.js')
    };
  });

}).call(this);
