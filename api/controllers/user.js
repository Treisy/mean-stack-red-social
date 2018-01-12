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


        //Avoid duplicate users
        User.find({ $or: [
                { email: user.email.toLowerCase()},
                { nick: user.nick.toLowerCase()}
            ]}).exec((err, users) => {
                if(err) return response.status(500).send({ message: 'Error en la petición de usuarios'});

                if(users && users.length >= 1) {
                    return response.status(200).send({ message: 'El usuario que intentas registrar ya existe'});
                } else {

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
                }
        });


    } else {
        response.status(200).send({
            message: 'Envia todos los campos necesarios'
        });
    }
}

function loginUser(request, response) {
    var params = request.body;
    var email = params.email,
        password = params.password;

    User.findOne({ email: email }, (err, user) => {
        if(err) return response.status(500).send({ message: 'Error en la petición' });

        if(user) {
            bcrypt.compare(password, user.password, (err, check) => {
                if(check) {
                    //Devolver datos
                    user.password = undefined;
                    return response.status(200).send({ user });
                } else {
                    return response.status(404).send({ message: 'El usuario no se ha podido identificar' });
                }
            });
        }  else {
            return response.status(404).send({ message: 'El usuario no se ha podido identificar!!' });
        }
    });
}

module.exports = {
    home,
    pruebas,
    saveUser,
    loginUser
};