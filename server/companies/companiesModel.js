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
  console.log('There was a database error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    
    console.timeEnd('uptime');
    console.time('uptime');
    
    console.log('Refreshing database connection.');
    
    connection.end();
    connection = mysql.createConnection(config);
    
    module.exports = connection;
  }
});

connection.on('error', function(err) {
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    connection.connect();
  } else {
    throw err;
  }
});

module.exports = connection;