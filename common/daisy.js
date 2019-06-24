 const express = require("express");
 const mysql = require("mysql");
  const app = express();
 const pool = mysql.createPool({
     host: "localhost",
     user: "root",
     password: "password",
    database: "hawkhospital"
 });

app.get("/api/cinemas", (req, res) => {
     pool.query("SELECT id, name FROM cinema", (error, rows) => {
         if (error) {
             return res.status(500).json({ error });
         }

         res.json(rows);
     });
 });

  app.listen(8082, () => console.log("App listening on port 8082"));