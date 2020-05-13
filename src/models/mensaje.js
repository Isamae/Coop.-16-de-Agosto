const mongoose = require('mongoose');
const Schema = mongoose.Schema;

    const Mensaje = new Schema({
        id:{ type: Number},
        nombre: { type : String},
        email: {type : String},
        texto: { type : String},
        asunto: { type : String}
        
    }, 
    {
        collection: 'mensajes'
    });

module.exports = mongoose.model('Mensaje', Mensaje);