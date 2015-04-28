var getWeather = require('../services/getWeather');
var Controller = {};
var Async = require('async');

Controller.index = function(req, response) {
 // call the getWeather service to tell us what the weather is.
 // send those variables into the hash below so we can render them.
  Async.series([
    function(callback) {
      new getWeather(callback);
    }
  ], function(err, result) {
    response.render('index', {
      title: "Forecastr",
      dailySummary: result[0].dailySummary,
      currentTemp: result[0].currentTemp
    });
  });
}

module.exports = Controller;