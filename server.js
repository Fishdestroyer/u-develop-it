const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'FuzzyCrackhead2317#',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

//db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {

//db.query(`DELETE FROM candidates WHERE id =?`, 1, (err, result) => {
  //  if (err) {
    //  console.log(err);
    //}
    //console.log(result);
  //});

  //const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
              // VALUES (?,?,?,?)`;
 // const params = [1, 'Ronald', 'Firbank', 1];

 // db.query(sql, params, (err, result) => {
   // if (err) {
    //    console.log(err);
  //  }
 //   console.log(result);
//  });


  app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });