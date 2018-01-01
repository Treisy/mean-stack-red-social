'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// Cargar rutas


// Cargar Midlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors



// Rutas
app.get('/pruebas', (req, res) => {
   res.status(200).send({
    message: 'Acción de prueba'
})
});


module.exports = app;