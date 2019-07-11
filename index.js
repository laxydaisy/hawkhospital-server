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
    pool.query("SELECT name,phone_number,email,d_image FROM doctor", (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(rows);
    })
});
app.get("/api/doctor/:id/patient", (req, res) => {
    pool.query(
        `SELECT d.d_id, d.name, d.phone_number, p.p_id
        FROM doctor d
        JOIN patient p on p.d_id = d.d_id`,
     [req.params.id],       
     (error, rows) => {
        if (error) {
            return res.status(500).json({ error });
        }
        res.json(rows);
    }

    );
});

app.post("/api/doctor", (req, res) => {
        const doctor = req.body;

         if (doctor.name="") {
             return res.status(400).json({ error: "Invalid payload" });
         }
    
         pool.query(
             "INSERT INTO doctor (name, phone_number, email, d_image) VALUES ('New', 071234567, 'default@gmail.com', 'img_003dg.jpg')",
             [doctor.name],
             (error, results) => {
                 if (error) {
                     return res.status(500).json({ error });
                 }
    
                 res.json(results.insertId);
             }
         );
     });


     app.put("/api/updateDoctor/:id", (req, res) => {
        const doctor = req.body;

         if (doctor.name="") {
             return res.status(400).json({ error: "Invalid payload" });
         }
    
         pool.query(
             "UPDATE doctor SET name ='sharon' WHERE d_id=4",
             [doctor.name],
             (error, results) => {
                 if (error) {
                     return res.status(500).json({ error });
                 }
    
                 res.json(results.insertId);
             }
         );
     });

     app.delete("/api/doctor/:id", (req, res) => {
             pool.query(
                "DELETE FROM doctor WHERE d_id = 5",
                 [req.params.id],
                 (error, results) => {
                     if (error) {
                         return res.status(500).json({ error });
                     }
        
                     res.json(results.affectedRows);
                 }
             );
         });
    
    
            
app.listen(8081, function () {
    console.log("App listening on port 8081");
});
