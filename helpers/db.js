var mysql = require('mysql');
const util = require('util');

const conn = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const query = util.promisify(conn.query).bind(conn);

const end = () => {
  conn.end();
};

module.exports = { query, end };
