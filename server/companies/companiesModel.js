var mysql = require('mysql');
// Sets connection per environment
var config = require('../config.js');

var connection = mysql.createConnection(config);

// var connection = mysql.createConnection({
//   host: mysqlUri,
//   user: mysqlUser,
//   password: mysqlPass,
//   database: mysqlDatabase
// });

//ClearDB will disconnect idle connections so a new connection object needs to be created and connected
connection.on('error', function(err) {
  console.log('Database error', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    // var newConnection = mysql.createConnection({
    //   host: mysqlUri,
    //   user: mysqlUser,
    //   password: mysqlPass,
    //   database: mysqlDatabase
    // });
    var newConnection = mysql.createConnection(config);
    module.exports = newConnection;
  } else {
    throw err;
  }
});

module.exports = connection;