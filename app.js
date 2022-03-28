const express = require('express');
const app = express();
var cors = require('cors');
const { createNewCart }  =  require('./chefDatabase/db')
app.use(express.json());
app.use(cors());

createNewCart()

app.get('/', (req, res) => {
  res.json('hello barbara!');
});

module.exports.app = app;