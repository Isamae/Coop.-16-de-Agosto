const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/:id',(req, res, next) => {
    User.findById(req.params.id, function ( err, user){
        if(err){ throw err;}
        else{
            res.json(user);
        }
    });
});

router.get('/',(req, res) => {
    User.find(function ( err, users){
        if(err){ throw err;}
        else{
            res.json(users);
        }
    });
});

router.post('/', (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(item => {
            res.status(200).json({user:'User Agregado !'});
        })
        .catch( err => {
            res.status(400).send({user: ' Error al agregar el usuario'});
        });
});

router.put('/:id',(req , res) => {
    User.findById(req.params.id, function( err, user) {
        if(!user){
            return next(new Error ('no se puedo cargar el docuento'));
        } else{
            user.nick = req.body.nick;
            user.password = req.body.password;
            user.save()
                .then(user => {
                    res.json('Update complete')
                })
                .catch(err => {
                    res.status(400).send('no se pudo actulizar')
                });
        }
    });
});

router.delete('/:id', (req, res, next) => {
    User.findByIdAndRemove(req.params.id, function(err, user) {
        if(err){
            res.json(err);
        }else{
            res.json('user eliminado satifactoriamente');
        }
    });
})
module.exports = router;