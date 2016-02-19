var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = require('./router');
var favicon = require('express-favicon');

var rootDir = __dirname + '/../';

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(favicon(__dirname + '/favicon.ico'));
  app.use(express.static(__dirname + '/../client'));

  router(app);
};
