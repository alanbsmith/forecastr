var getWeather = require('../services/getWeather');
var Controller = {};

Controller.index = function(req, response) {

 // call the getWeather service to tell us what the weather is.
 // send those variables into the hash below so we can render them.
  var weather = new getWeather();

  console.log('weather', weather);

  response.render('index', {title: "Forecastr", dailySummary: weather[0], currentTemp: weather[1] })
}

module.exports = Controller;