'user strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = ({
   text: String,
   created_at: String,
   emmiter: { type: Schema.ObjectId, ref: 'User' },
   receiver: { type: Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model( 'Message', messageSchema );