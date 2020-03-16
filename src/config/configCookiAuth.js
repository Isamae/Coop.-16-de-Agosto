const passport = require('passport')
// getting the local authentication type
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user');

passport.use(
    new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password'
  }, 
  (username, password, done) => {
      User.findOne({'nick':username, 'password':password}, function(err, user){
        if (user!=null) {
            done(null, user)
        } else {
            done(null, false, {message: 'No existe el usuario o credenciales incorrectas'})
        }
      })
  }
))

passport.serializeUser((user, done) => {
    console.log("Estamos serializando:"+user)
    done(null, user._id)

})

passport.deserializeUser((id, done) => {
    console.log("Estamos desserializando:"+id)
    User.findOne({'_id':id}, function(err, user) {
        done(null, user)
    })
})
module.exports = passport