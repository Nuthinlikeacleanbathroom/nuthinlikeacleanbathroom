var mysql = require('mysql');
// Sets connection per environment
var config = require('./config');

var connection = mysql.createConnection(config);

//ClearDB will disconnect idle connections so a new connection object needs to be created and connected
connection.on('error', function(err) {
  console.log('Database connection error', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    module.exports = mysql.createConnection(config);
  } else {
    throw err;
  }
});

module.exports = connection;