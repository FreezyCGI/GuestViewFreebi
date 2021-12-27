const { Pool } = require('pg');

let pool = new Pool(
    {
        user: "postgres",
        host: "localhost",
        database: "webtech21jwt",
        password:"1234",
        port:"5432"
});

module.exports = pool;