const express = require('express');
const app = express();
app.use(express.json());
var cors = require('cors');
app.use(cors({
  origin: "https://myprivatechef.herokuapp.com/",
  credentials: true
}));


app.get('/', (req, res) => {
  res.json('hello barbara!');
});

module.exports.app = app;