const express = require("express");
const app = express();
const port = "3000";
const dotenv = require("dotenv");

dotenv.config({});

const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:      process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    port     : process.env.DB_PORT,
});
connection.connect(function(err) {
    if (err) console.log(err.message) ;
    console.log("DB Successfully connected");
});

app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
});

app.listen(port, () => {
    console.log(`[INFO] Listening on http://localhost:${port}`);
});

