var Forecast = require('forecast.io');

var getWeather = function() {
  var dailySummary;
  var currentTemp;

  var options = {
    APIKey: process.env.APIKEY,
    timeout: 1000
  };

  var forecast = new Forecast(options);
  var latitude = 39.7392;
  var longitude = -104.99;

 forecast.get(latitude, longitude, function(err, res, data) {
    if (err) throw err;

    dailySummary = data.daily.summary;
    currentTemp = data.currently.temperature;

    console.log('dailySummary', dailySummary);

  });

 console.log('out here');
  return [ 'something', 'something else' ]
}

module.exports = getWeather;