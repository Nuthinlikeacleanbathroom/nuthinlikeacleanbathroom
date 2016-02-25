module.exports = {
  host: process.env.CLEARDB_DATABASE_URL || 'us-cdbr-iron-east-03.cleardb.net',
  user: process.env.CLEARDB_DATABASE_USER || 'bd358f5252fa06',
  password: process.env.CLEARDB_DATABASE_PASS || '7fbb12d0',
  database: process.env.CLEARDB_DATABASE || 'heroku_2df98b5f307ebb3'
};