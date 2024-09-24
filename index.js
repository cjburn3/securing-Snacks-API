const express = require('express');
const app = express();
const snacksRouter = require('./routes/snacks');

app.use(express.json());
app.use('/snacks', snacksRouter);

app.get('/snacks', (req, res) => {
  res.status(200).json({ message: 'Here are your snacks' });
});

module.exports = app;