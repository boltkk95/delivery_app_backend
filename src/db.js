const { Pool } = require('pg');

const config = require('./config/config');

const { connectionString } = config;
const pool = new Pool({
  connectionString,
});

// module.exports = { pool };
module.exports = {
  query: (text, params) => pool.query(text, params),
};
