var express = require('express');
var middleware = require('./middleware');

var app = express();
var port = process.env.PORT || 8000;

middleware(app, express);

app.listen(port, function() {
  console.log('listening on port ', port);
});

module.exports = app;
