var bodyParser = require('body-parser');
var morgan = require('morgan');
var router = require('./router');
var favicon = require('express-favicon');
var path = require('path');
var rootDir = __dirname + '/../';
var passport = require('passport'); 
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// Config passport strategies
require('./Auth/passport')(passport); 
var userDB = require('./Auth/userDB');
module.exports = function(app, express) {
  // Middleware for formatting requests and logging
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  // CORS headers
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(favicon(path.join(__dirname, '/favicon.ico')));
  app.use(express.static(path.join(__dirname, '/../client')));
  app.set('view engine', 'ejs' );
  app.use(cookieParser());
  app.use(session({ 
    secret: 'superSecret',
    name: 'cookieSecret',
    // store: 'Session_Store', // connect mongo session store
    // proxy: true,
    resave: false,
    saveUninitialized: false 
  }));
  app.use(passport.initialize());
  app.use(passport.session());
  router(app, passport);
};