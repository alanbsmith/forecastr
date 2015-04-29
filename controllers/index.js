var getWeather = require('../services/getWeather');
var Controller = {};
var Async = require('async');

Controller.index = function(req, response) {
  var params = req.query;

  Async.series([
    function(callback) {
      new getWeather(params, callback);
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