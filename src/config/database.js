const mysql = require('mysql2/promise');
require("dotenv").config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user:process.env.USER,
    port: process.env.DB_PORT,
    password:process.env.PW,
    database:process.env.DB,
    connectionLimit: 30
});

module.exports = pool;