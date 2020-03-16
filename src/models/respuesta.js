const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Respuesta = new Schema({
    id:{ type: Number},
    titulo: { type : String},
    descripcion: {type : String},
    idMensaje: { type : String}    
}, 
{
    collection: 'respuestas'
});

module.exports = mongoose.model('Respuesta', Respuesta);