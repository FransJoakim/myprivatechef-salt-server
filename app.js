const express = require('express');
const app = express();
var cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.json('hello world!');
});

module.exports.app = app; 