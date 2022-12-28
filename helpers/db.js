var mysql = require('mysql');
const util = require('util');

const conn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'user',
  password: 'password',
  database: 'database',
});

const query = util.promisify(conn.query).bind(conn);
