var james  = require('james'),
    coffee = require('coffee-script');

exports.createStream = function(options) {
  options = options || {};
  return james.createStream(function(file, callback) {
    callback(coffee.compile(file, options));
  });
}
