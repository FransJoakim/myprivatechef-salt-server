const express = require('express');
const { getAllChefs, saveBookedDateToChef }  =  require('./chefDatabase')
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send('server is up');
  res.end();
});

app.get('/chefs', async (req, res) => {
  const result = await getAllChefs();
  res.json(result);
});

app.post('/chefs/:name', async (req, res)=> {
  const name = req.params.name
  const date = req.body.selectedDate
  console.log(date)
  const result = await saveBookedDateToChef(name, date);
})
 

module.exports.app = app;