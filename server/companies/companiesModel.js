var mysql = require('mysql');
// Sets connection per environment
var config = require('../config.js');

var connection = mysql.createConnection(config);

console.time('uptime');

//ClearDB will disconnect idle connections so a new connection object needs to be created and connected
connection.on('error', function(err) {
  console.log('Database error', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    console.timeEnd('uptime');
    console.time('uptime');
    var newConnection = mysql.createConnection(config);

    module.exports = newConnection;
  } else {
    throw err;
  }
});

module.exports = connection;