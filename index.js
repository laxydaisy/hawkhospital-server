require("dotenv").config();

const express = require("express");
const mysql = require("mysql")
const app = express();

const pool = mysql.createPool({
    
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
app.get("/api/home",(req,res)=>{
pool.query("SELECT name,phone_number,email,image FROM doctor",(error, rows)=>{
    if(error){
        return res.status(500).json({error});
    }
    res.json(rows);
})
});

app.listen(8081, function () {
    console.log("App listening on port 8081");
});
