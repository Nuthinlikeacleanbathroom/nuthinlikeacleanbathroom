var mysql = require('mysql');
// Sets connection per environment
var config = require('../config.js');

var connection = mysql.createConnection(config);

var connection = mysql.createConnection({
  host: mysqlUri,
  user: mysqlUser,
  password: mysqlPass,
  database: mysqlDatabase
});

connection.on('error', function(err) {
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    connection.connect();
  } else {
    throw err;
  }
});
//connection.connect();

module.exports = connection;