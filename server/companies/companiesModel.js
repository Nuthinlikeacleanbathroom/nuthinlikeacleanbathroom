var mysql = require('mysql');
var config = require('../config.js');

// Set connection per dev or deployed version.
var mysqlPass, mysqlUser, mysqlDatabase, mysqlUri;
if (process.env.NODE_ENV === 'production') {
  mysqlPass = config.mysqlPass;
  mysqlUser = config.mysqlUser;
  mysqlDatabase = config.mysqlDatabase;
  mysqlUri = process.env.CLEARDB_DATABASE_URL;
} else {
  mysqlPass = '';
  mysqlUser = 'root';
  mysqlDatabase = 'crunchbase';
  mysqlUri = 'localhost';
}

var connection = mysql.createConnection({
  host: mysqlUri,
  user: mysqlUser,
  password: mysqlPass,
  database: mysqlDatabase
});

connection.connect();

setInterval(connection.connect, 60000);

module.exports = connection;