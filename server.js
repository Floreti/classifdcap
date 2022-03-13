///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require('mongoose');
// pull PORT from .env, give default value of 3000
// pull MONGODB_URL from .env
const { PORT = 3000 } = process.env;   //another notation: const PORT = process.env.PORT || 3000;
// import express
const express = require("express");
// create application object
const app = express();
// import middlware
const cors = require("cors");
const morgan = require("morgan");

const req = require("express/lib/request");
const controllers = require("./controllers");

//const controllers = require('./controllers')
const methodOverride = require('method-override');
const session = require("express-session");
const MongoStore = require("connect-mongo");


///////////////////////////////
/* SECTION DB CONNNECTION */
////////////////////////////////
const dbconnection = require('./config/db.connection');

app.use(
    session(
        {
            // where to store the sessions in mongodb
            store: MongoStore.create({ mongoUrl: process.env.MONGODB_URL }),

            // secret key is used to sign every cookie to say its is valid
            secret: "super secret",
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

// app.use('/products', controllers.product)
// app.use('/', controllers.user)

app.use((req, res, next) => {
    console.log("I'm running for another new route")
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies

///////////////////////////////
// ROUTES
////////////////////////////////
const routes = require('./routes/routes');

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));