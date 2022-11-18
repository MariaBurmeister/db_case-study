const express = require("express");
const cors = require("cors");
const app = express();
const sqlite3 = require('sqlite3').verbose();

const allowedOrigins = [
  'http://localhost:3000',
];
const corsOptions = {
  origin: allowedOrigins
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let db = new sqlite3.Database('./fahrplans.db');

app.get("/fahrplans", (req, res, next) => {
  var {query} = req;
  db.all(
  `SELECT 
    origin,
    destination,
    starttime,
    endtime
  FROM 
    fahrplans 
  WHERE 
    CASE 
        WHEN ? = "from"
          THEN origin = ?
        WHEN ? = "to"
          THEN destination = ?
    END
  `, [query.stretch, query.location, query.stretch, query.location], (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }

    res.status(200).json(rows);
  });
});


// db.close();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
