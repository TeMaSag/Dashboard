const express = require('express');
const cors = require('cors');
const routes = require('./srcServer/routes/index');
const app = express();

app.use(cors());

routes(app);

module.exports = app;