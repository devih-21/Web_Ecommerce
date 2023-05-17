const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "namnpdb.mysql.database.azure.com",
  user: "namnpdbserver",
  password: "Abcd1234",
  database: "ecommerce",
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
});

module.exports = pool;