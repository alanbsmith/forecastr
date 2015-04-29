var Forecast = require('forecast.io');
var Async = require('async');

var getWeather = function(params, outerCallback) {
  console.log('params', params);
  var latitude = parseFloat(params.lat) //39.7392;
  var longitude = parseFloat(params.lon) //-104.99;

  var options = {
    APIKey: process.env.APIKEY,
    timeout: 1000
  };

  var forecast = new Forecast(options);

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