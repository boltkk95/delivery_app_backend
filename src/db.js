const { Pool } = require('pg');

const config = require('./config/config');

const dbHost = config.db.host;
const dbPort = config.db.port;
const dbUser = config.db.user;
const dbPassword = config.db.password;
const dbName = config.db.name;

const pool = new Pool({
  user: dbUser,
  database: dbName,
  password: dbPassword,
  port: dbPort,
  host: dbHost,
});

// module.exports = { pool };
module.exports = {
  query: (text, params) => pool.query(text, params),
};
