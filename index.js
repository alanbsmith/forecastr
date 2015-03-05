var express = require('express');
var Forecast = require('forecast.io');

var app = express();
var PORT = 3000;

app.get('/', function (req, response) {
  var options = {
    APIKey: 'YOURAPIKEY',
    timeout: 1000
  };

  var forecast = new Forecast(options);
  var latitude = 39.7392;
  var longitude = -104.99;

  forecast.get(latitude, longitude, function(err, res, data) {
    if (err) throw err;

    var dailySummary = data.daily.summary;
    var currentTemp = data.currently.temperature;

    var html = "<h1>The Weather in Denver is</h1><p>" + dailySummary + "</p><p>The temperature is currently:" + currentTemp+ "</p>";

    response.send(html)
  });
});

var server = app.listen(PORT, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
});