const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production"
});

console.log(process.env.NODE_ENV, process.env.DATABASE_URL);

module.exports = pool;
