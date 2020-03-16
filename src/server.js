const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const app = express();
const cookieSession = require('cookie-session')
const passport = require('passport')
var history = require('connect-history-api-fallback');

const itemRoutes = require('./routes/user.js');
const mensajeRoutes = require('./routes/mensaje.js');
const respuestaRoutes = require('./routes/respuesta.js');
const logueado = require('./controller/autentificacion.js');

const mongoose  = require('mongoose');
const { DB } = require('./config/DB');
mongoose.Promise = global.Promise;
mongoose.connect(DB, {
    //useMongoClient: true, 
    useNewUrlParser: true
}).then(() => console.log('db connectada')) 
.catch( err => console.log(err));

//Settings
var port = process.env.PORT || 4000;
app.set('port', port)

// CORS middleware
/*const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app.use(allowCrossDomain)*/
// Middlewres
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(history());
app.use(cookieSession({
    name: 'session',
    keys: ['vueauthrandomkey'],
    maxAge: 48 * 60 * 60 * 1000 // 48 horas
}))
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use('/user',itemRoutes);
app.use('/mensaje',mensajeRoutes);
app.use('/respuesta',respuestaRoutes);
app.use('/api',logueado);

//Static File
app.use(express.static(path.join(__dirname, 'public')))

// start the server
app.listen(port,() => {
    console.log('server in port: ', port);
});


