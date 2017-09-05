//Create database configuration information
// module.exports = process.env.DATABASE_URL || {
//   host:     process.env.DB_HOST || 'localhost',
//   port:     process.env.DB_PORT || 5432,
//   database: process.env.DB_NAME || 'rnd_name_gen_dev',
// };
const pgp = require('pg-promise')();

let db;

if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  db = pgp({
    database: 'adaquote_development',
    port: 5432,
    host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
  db = pgp(process.env.DATABASE_URL);
}

module.exports = db;
