'use strict'

var User = require('../models/user');

function home(req, res) {
    res.status(200);
    res.send({
        message: 'Home'
    });
}

function pruebas(req, res) {
    console.log(req.body);
    res.status(200);
    res.send({
        message: 'Acción de prueba'
    });
}

module.exports = {
    home,
    pruebas
};