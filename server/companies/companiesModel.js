var mysql = require('mysql');

// Set connection per dev or deployed version.
var mysqlPass, mysqlUser, mysqlDatabase, mysqlUri;
if (process.env.PROCESS === 'production') {
  mysqlPass = '7fbb12d0';
  mysqlUser = 'bd358f5252fa06';
  mysqlDatabase = 'heroku_2df98b5f307ebb3';
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

module.exports = connection;