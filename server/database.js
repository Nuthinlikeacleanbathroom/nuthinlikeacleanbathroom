var mysql = require('mysql');
// Sets connection per environment
var config = require('./config');


//ClearDB will disconnect idle connections so a new connection object needs to be created and connected
var handleDisconnect = function() {
  var connection = mysql.createConnection(config);
  console.log('Database (re)connecting ...');
  
  connection.on('error', function(err) {
    console.error('Database connection error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect();
    } else {
      throw err;
    }
  });

  module.exports = connection;
};

handleDisconnect();
