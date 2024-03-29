// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const config = {
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
  },
  app: {
    port: process.env.PORT || 3000,
  },
  connectionString: process.env.DB_CONNECTION_STRING,
};
if (!config.connectionString)
  config.connectionString = `postgresql://${config.db.user}:${config.db.password}@${config.db.host}:${config.db.port}/${config.db.name}`;

module.exports = config;
