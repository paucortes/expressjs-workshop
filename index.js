var express = require('express');
var app = express();

function greet(firstName) {
  return '<h1>Hello, ' + firstName + '!</h1>';
}

function op (operator, num1, num2) {
  if (operator === "add"){
    return num1 + num2;
    }

  else if (operator === "mult"){
    return num1 * num2;
    }

  else if (operator === "div"){
   return num1 / num2;
    }

  else if (operator === "sub"){
    return num1 - num2;
    }
  
  else {
    return "error";
  }
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

app.get('/calculator', function(request, response) {
  var operator = request.query.operation;
  var num1 = parseInt(request.query.num1);
  var num2 = parseInt(request.query.num2);
  var total = op(operator, num1, num2);
  if (total === "error") {
    response.status(404).send('Incorrect operation. Please enter a valid operation');
  }
  else {
    response.send({operator: operator, firstOperand : num1, secondOperand: num2, solution: total});
  }
});
  


/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
