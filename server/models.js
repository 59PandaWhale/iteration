const { Pool } = require('pg');

const PG_URI =
  'postgres://sohyxnln:wrpfPZMrDVQbcseAeInoHVndUHqxkNqd@mahmud.db.elephantsql.com/sohyxnln';

// create new pool using connection string
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    // display SQL query in console upon execution
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
