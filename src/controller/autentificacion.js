'Use strict'

const express = require('express');
const router = express.Router();
const passport = require('../config/configCookiAuth')

const authMiddleware = require('./cookiAuth')
const User = require('../models/user');

router.post("/login", (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        console.log("usuario Logueado " +user)
        if (err) {
            return next(err);
        }
        if (user==false) {
            return res.status(400).send([user, "Cannot log in", info])
        }

        req.login(user, (err) => {
            res.send("Logged in")
        })
    })(req, res, next)
})

router.get('/logout', function(req, res){
    req.logout();
    console.log("logged out")
    return res.send();
});


router.get("/user", authMiddleware, (req, res) => {
    console.log("Paso 1 :"+ req.session.passport.user)
    User.findOne({'_id':req.session.passport.user}, function(err, user) {
        res.send({user: user})
    })
    
})



module.exports = router;