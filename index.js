const express = require('express');
const app = express();


app.get('/snacks', (req, res) => {
  res.status(200).json({ message: 'Here are your snacks' });
});

module.exports = app;