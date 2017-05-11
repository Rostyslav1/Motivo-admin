var express = require('express');
var http = require('http');

var app = express();

app.use(express.static(__dirname));
app.use(function(req, res){
  res.redirect('/');
});

var server = http.createServer(app);

var port = process.env.PORT || 3006;

server.listen(port);
console.log("listening on " + port);