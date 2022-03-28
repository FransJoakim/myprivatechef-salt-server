const express = require('express');
const { createNewCart }  =  require('./chefDatabase/db')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

createNewCart()

app.get('/', (req, res) => {
  res.json('hello barbara!');
});

module.exports.app = app;