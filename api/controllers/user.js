'use strict'

var bcrypt = require('bcrypt-nodejs');
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

function saveUser(request, response) {
    var params = request.body;
    var user = new User();

    if (params.name && params.surname && params.nick && params.email && params.password) {
        user.name = params.name;
        user.surname = params.surname;
        user.nick = params.nick;
        user.email = params.email;
        user.role = 'ROLE_USER';
        user.image = null;

        bcrypt.hash(params.password, null, null, (err, hash) => {
            user.password = hash;

            user.save((err, userStored) => {
                if(err) return response.status(500).send({message: 'Error al guardar usuario'});

                if(userStored) {
                    response.status(200).send({user: userStored});
                } else {
                    response.status(404).send({message: 'No se ha registrado el usuario' });
                }
            });
        });

    } else {
        response.status(200).send({
            message: 'Envia todos los campos necesarios'
        });
    }
}

module.exports = {
    home,
    pruebas,
    saveUser
};