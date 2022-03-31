//connects database with the server
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "j0hs@fe//01",
    host:"localhost",
    port: 5432,
    database: "jwttutorial"
});

module.exports = pool;