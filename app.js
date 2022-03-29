const express = require('express');
const { getAllChefs }  =  require('./chefDatabase')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/chefs', async (req, res) => {
  const result = await getAllChefs();
  console.log(result);
  res.json(result);
});

module.exports.app = app;