const express = require("express");
const mysql = require("mysql")
const app = express();

const pool = mysql.createPool({
    host: "localhost",
    user: "foo",
    password: "password",
    database: "hawkhospital",
    insecureAuth: true
});
app.get("/api/hawkhospital", (req, res) => {
    pool.query("SELECT * from doctor", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });

        }
        res.json(rows);
    });
});

app.listen(8081, function () {
    console.log("App listening on port 8081");
});
