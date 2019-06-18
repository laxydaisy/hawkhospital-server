require("dotenv").config();

const express = require("express");
const mysql = require("mysql")
const app = express();

const pool = mysql.createPool({

    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/hawkhospital", (req, res) => {
    pool.query("SELECT * from doctor", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });

        }
        res.json(rows);
    });
});
app.get("/api/home", (req, res) => {
    pool.query("SELECT name,phone_number,email,image FROM doctor", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(rows);
    })
});
app.get("/api/doctor/:id/patient", (req, res) => {
    pool.query(
        `SELECT d.name, d.phone_number, d.image, GROUP_CONCAT(t.id) treat
        FROM doctor d
         JOIN treat t ON t.id = d.id
         WHERE d.id = ?

         GROUP BY d.id`,
        
        
     [req.params.id],       
     (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(rows);
    });
});

app.post("/api/hawkhospital_server", (req, res) => {
    console.log(reg.body);
});
    
    
            
app.listen(8081, function () {
    console.log("App listening on port 8081");
});
