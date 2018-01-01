'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mean_social', {useMongoClient: true})
    .then(() => {
        console.log('Conexión success');
    })
    .catch(err => console.log(err));