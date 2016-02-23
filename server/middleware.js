var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = require('./router');
var favicon = require('express-favicon');

var rootDir = __dirname + '/../';

module.exports = function(app, express) {
  // Middleware for formatting stuff and logs
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  // CORS headers
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // app.use(favicon(__dirname + '/favicon.ico'));
  app.use(express.static(__dirname + '/../client'));

  router(app);
};
