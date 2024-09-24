require('dotenv').config();

const express = require('express');
const app = express();
const snacksRouter = require('./routes/snacks');
const apiKeyMiddleware = require('./middleware');

app.use(express.json());
app.use(apiKeyMiddleware);
app.use('/snacks', snacksRouter);

module.exports = app;