var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	//response.send('Hello World 123456!!!!11');
	buf = new Buffer(256);
	len = buf.write('\u00bd + \u00bc = \u00be', 0);
	response.send(len + " bytes: " + buf.toString('utf8', 0, len));
  //response.send(buffer.toString(fs.readFileSync('./index.html')));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});