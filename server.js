const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();
//const inputCheck = require('./utils/inputCheck');
//const { query } = require('express');


// EXPRESS MIDDLEWARE
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//USE API ROUTES
app.use('/api', apiRoutes);

// to get all candidates(MOVED TO CANDIDATESROUTE.JS FILE)
//to get a single candidate
// to update a candidate's party
// to select all parties
// to select a single party
// delete a candidate
// to delete a party

//DEFAULT RESPONSE FOR ANY OTHER REQUEST (NOT FOUND)
  app.use((req, res) => {
    res.status(404).end();
  });

//START SERVER AFTER DB CONNECTION
  db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });

//app.listen(PORT, () => {
  //  console.log(`Server running on port ${PORT}`);
  //});

  