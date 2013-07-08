var express = require('express');
var fs = require('fs');
//var buffer = require('Buffer');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 123456!!!!11');
  //response.send(buffer.toString(fs.readFileSync('./index.html')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});