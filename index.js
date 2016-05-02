var express = require('express');
var app = express();

function greet(firstName) {
  return '<h1>Hello, ' + firstName + '!</h1>';
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/hello', function(request, response) {
  response.send('<h1>Hello, world!</h1>');
});

app.get('/hello/:name', function(request, response) {
  var firstName = request.params.name;
  var result = greet(firstName);
  response.send(result);
});

/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
