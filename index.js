var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');
require('dotenv').config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

var app = express()

app.use(cors())

app.get('/', (req, res, next) => {
    res.json({ msg: 'ok' })
})

app.get('/attractions', (req, res, next) => {
    pool.query("SELECT * FROM attractions", function (err, rows, fields) {
        res.json(rows)
    });
})

app.listen(5000, () => {
    console.log('web server listening on prot 5000')
})