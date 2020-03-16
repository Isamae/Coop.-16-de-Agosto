const express = require('express');
const router = express.Router();

const Respuesta = require('../models/respuesta');

router.get('/',(req, res) => {
    Respuesta.find(function ( err, respuestas){
        if(err){ throw err;}
        else{
            res.json(respuestas);
        }
    });
});

router.post('/', (req, res) => {
    const respuesta = new Respuesta(req.body);
    respuesta.save()
    .then(item => {
        res.status(200).json({respuesta:'Respuesta Enviado !'});
    })
    .catch( err => {
        res.status(400).send({respuesta: ' Error al enviar respuesta'});
    });
});

router.put('/:id',(req , res) => {
    Respuesta.findById(req.params.id, function( err, respuesta) {
        if(!respuesta){
            return next(new Error ('no se puedo cargar el docuento'));
        } else{
            respuesta.titulo = req.body.titulo;
            respuesta.descripcion = req.body.descripcion;
            respuesta.idMensaje = req.body.idMensaje;
            respuesta.save()
                .then(respuesta => {
                    res.json('Update complete')
                })
                .catch(err => {
                    res.status(400).send('no se pudo actulizar')
                });
        }
    });
});

router.delete('/:id', (req, res, next) => {
    Respuesta.findByIdAndRemove(req.params.id, function(err, mensaje) {
        if(err){
            res.json(err);
        }else{
            res.json('Respuesta eliminado satifactoriamente');
        }
    });
})
router.get('/:id', async(req, res, next) => {
    const resp =  await Respuesta.findById(req.params.id);
    res.json(resp);

})
module.exports = router;