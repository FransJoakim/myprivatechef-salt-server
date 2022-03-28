const express = require('express');
const app = express();
var cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('hello barbara!');
});

module.exports.app = app;