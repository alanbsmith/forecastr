var express = require('express');
var controllers = require('./controllers');

require('dotenv').load();

var app = express();
var PORT = process.env.MAIN_PORT;

app.set('views', './views')
app.set('view engine', 'jade')

//ROUTES GO HERE:
app.get('/', controllers.index);


var server = app.listen(PORT, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
});
