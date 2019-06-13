require("dotenv").config();

const express = require("express");
const mysql = require("mysql")
const app = express();

const pool = mysql.createPool({
    // host:"localhost",
    // user:"foo",
    // password:"password",
    // database:"hawkhospital"
    // "fatal":true,
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database:process.env.DB_NAME
});
app.get("/api/hawkhospital", (req, res) => {
    pool.query("SELECT * from doctor", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });

        }
        res.json(rows);
    });
});
app.get("/api/hawkhospital/:id", (req, res) => {
         pool.query(
             "SELECT id, name FROM patient WHERE id = ?",
             [req.params.id],
             (error, rows) => {
                 if (error) {
                     return res.status(500).json({ error });
                 }
    
                 res.json(rows);
             }
         );
     });

app.listen(8081, function () {
    console.log("App listening on port 8081");
});
