var Forecast = require('forecast.io');
var Async = require('async');

var getWeather = function(outerCallback) {
  var options = {
    APIKey: process.env.APIKEY,
    timeout: 1000
  };

  var forecast = new Forecast(options);
  var latitude = 39.7392;
  var longitude = -104.99;

  Async.series([
    function(callback) {
      forecast.get(latitude, longitude, function(err, res, data) {
        if (err) throw err;

        var dailySummary = data.daily.summary;
        var currentTemp = data.currently.temperature;

        callback(null, {dailySummary: dailySummary, currentTemp: currentTemp});
      });
    }
  ], function(err, result) {
    outerCallback(null, result[0]);
  });
}

module.exports = getWeather;