var mysql = require('mysql');
// Sets connection per environment
var config = require('../config.js');

var connection = mysql.createConnection(config);

var connection = mysql.createConnection({
  // host: mysqlUri,
  // user: mysqlUser,
  // password: mysqlPass,
  // database: mysqlDatabase
  host: 'mysql://bd358f5252fa06:7fbb12d0@us-cdbr-iron-east-03.cleardb.net/heroku_2df98b5f307ebb3?reconnect=true'
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

module.exports = connection;