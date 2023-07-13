const express = require('express');
const app = express();
const methodOverride = require('method-override');
const compression = require('compression');
const dotenv = require('dotenv');
const routerHome = require('../routers');
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(compression());

app.use(cors());
app.use(methodOverride());

app.use('/', routerHome);

module.exports = app;

