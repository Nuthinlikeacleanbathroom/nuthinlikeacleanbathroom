var mysql = require('mysql');

// Set connection per dev or deployed version.
var mysqlPass, mysqlUser, mysqlDatabase, mysqlUri;
if (process.env.NODE_ENV === 'production') {
  mysqlPass = process.env.CLEARDB_DATABASE_PASS || '7fbb12d0';
  mysqlUser = process.env.CLEARDB_DATABASE_USER || 'bd358f5252fa06';
  mysqlDatabase = process.env.CLEARDB_DATABASE || 'heroku_2df98b5f307ebb3';
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