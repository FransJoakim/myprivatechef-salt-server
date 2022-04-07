const express = require('express');
const { getAllChefs, saveBookedDateToChef } = require('./chefDatabase')
const { postNewBooking, getUserBookings } = require('./bookingDatabase')
const app = express();
const cors = require('cors');
const {sendMail} = require('./emailService')

app.use(express.json());
app.use(cors());

app.get('/', async (req, res) => {
  res.send('server is up');
  res.end();
});

app.get('/api/chefs', async (req, res) => {
  const result = await getAllChefs();
  res.json(result);
});

app.get('/api/users/:username', async (req, res) => {
  const result = await getUserBookings(req.params.username);
  res.json(result);
})

app.post('/api/booking', async (req, res) => { 
  const dateReservation = await saveBookedDateToChef(req.body.name, req.body.date);
  const bookingConfirmation = await postNewBooking(req.body)
  await sendMail(req.body.user,req.body.totalPrice,req.body.chef,req.body.totalhours,req.body.date, req.body.shoppingList);
  
})


module.exports.app = app;