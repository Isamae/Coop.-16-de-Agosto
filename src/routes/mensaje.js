const express = require('express');
const router = express.Router();

const Mensaje = require('../models/mensaje');

router.get('/',(req, res) => {
    Mensaje.find(function ( err, mensajes){
        if(err){ throw err;}
        else{
            res.json(mensajes);
        }
    });
});
router.get('/:id',(req, res) => {

    Mensaje.findById(req.params.id, function ( err, mensaje){
        if(err){ throw err;}
        else{
            res.json(mensaje);
        }
    });
});

router.post('/', (req, res) => {
    const mensaje = new Mensaje(req.body);
    mensaje.save()
        .then(item => {
            res.status(200).json({mensaje:'Mensaje Enviado !'});
        })
        .catch( err => {
            res.status(400).send({mensaje: ' Error al enviar mensaje'});
        });
});

router.put('/:id',(req , res) => {
    Mensaje.findById(req.params.id, function( err, mensaje) {
        if(!mensaje){
            return next(new Error ('no se puedo cargar el Mensaje'));
        } else{
            mensaje.nombre = req.body.nombre;
            mensaje.email = req.body.email;
            mensaje.texto = req.body.texto;
            mensaje.save()
                .then(mensaje => {
                    res.json('Update complete')
                })
                .catch(err => {
                    res.status(400).send('no se pudo actulizar')
                });
        }
    });
});

router.delete('/:id', (req, res, next) => {
    Mensaje.findByIdAndRemove(req.params.id, function(err, mensaje) {
        if(err){
            res.json(err);
        }else{
            res.json('Mensaje eliminado satifactoriamente');
        }
    });
})
module.exports = router;