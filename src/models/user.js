const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    id:{ type: Number},
    password: { type : String},
    nick: {type : String}
}, {
    collection: 'users'
});

module.exports = mongoose.model('User',User);