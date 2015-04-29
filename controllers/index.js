var getWeather = require('../services/getWeather');
var Controller = {};
var Async = require('async');
var geoip = require('geoip-lite');

Controller.index = function(req, response) {
  var params = getParams();

  function getParams() {
    if(req.query.lat !== undefined && req.query.lon !== undefined) {
      return req.query;
    } else {
        var ip  = '67.177.208.157'; // just a static IP for now
        var geo = geoip.lookup(ip)['ll'];
        
        return { 'lat': geo[0], 'lon': geo[1] };
      }
  }

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