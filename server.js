///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { PORT = 4000, MONGODB_URL } = process.env;   //another notation: const PORT = process.env.PORT || 3000;
const cors = require('cors');
const morgan = require('morgan');
const req = require('express/lib/request');
const controllers = require('./controllers/index');
//const controllers = require('./controllers')
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const nocache = require('nocache');

///////////////////////////////
/* SECTION DB CONNNECTION */
////////////////////////////////

const dbconnection = require('./config/db.connection');


app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(
    session(
        {
            // where to store the sessions in mongodb
            store: MongoStore.create({ mongoUrl: process.env.MONGODB_URL }),

            // secret key is used to sign every cookie to say it is valid
            secret: 'super secret',
            resave: false,
            saveUninitialized: false,
            // configure the experation of the cookie
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
            },
        }
    )
);

// App.use for adding 
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(methodOverride('_method'))
app.use(nocache());

app.use((req, res, next) => {
    console.log(req.body);
    console.log("I'm running for another new route")
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

//////////////////////////////
// MiddleWare
////////////////////////////////
const corsOptions = {
    // origin: '*',
    // preflightContinue: false,
    // credentials: true,
    // mode: "no-cors"
};
app.use(cors(corsOptions));

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", '*');
//     res.header("Access-Control-Allow-Credentials", true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept Authorization');
//     next();
// });
app.use(morgan('dev')); // logging
app.use(express.json()); // parse json bodies

/////////////////////////
//Controllers Middleware
/////////////////////////

app.use('/user', controllers.User);
app.use('/ads', controllers.Ad);
// app.use('/ads', controllers.Ad)
// app.use('/', controllers.Ad)
// app.use('/location', controllers.Location);
// app.use('/category', controllers.Category);

///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get('/', (req, res) => {
    res.send('hello world');
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));