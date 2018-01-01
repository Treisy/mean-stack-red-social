'user strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var followSchema = ({
    user: { type: Schema.ObjectId, ref: 'User' },
    followed: { type: Schema.ObjectId, ref: 'User'}
});


module.exports = mongoose.model( 'Follow', followSchema );