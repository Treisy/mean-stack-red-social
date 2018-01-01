'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Cargar rutas
var userRouters = require('./routes/user');



// Cargar Midlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors



// Rutas
app.use('/api', userRouters);

module.exports = app;