///////////////////////////////
// DEPENDENCIES
////////////////////////////////
// import express
const express = require("express");
// create application object
const app = express();
const mongoose = require('mongoose');
// pull PORT from .env, give default value of 3000
// pull MONGODB_URL from .env
const { PORT = 3000 } = process.env;   //another notation: const PORT = process.env.PORT || 3000;

// import middlware
const cors = require("cors");
const morgan = require("morgan");

const req = require("express/lib/request");
const controllers = require("./controllers/index");

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
// create a test route
app.get("/", (req, res) => {
    res.send("hello world");
});


/////////////////////////
//***********
/////////////////////////

// app.use('/user', controllers.User);
// app.use('/ad', controllers.Ad);

// Ad INDEX ROUTE
app.get("/ads", async (req, res) => {
    try {
        // send all ads
        res.json(await Ads.find({}));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Ads CREATE ROUTE
app.post("/ads", async (req, res) => {
    try {
        // send all Ads
        res.json(await Ads.create(req.body));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// PEOPLE UPDATE ROUTE
app.put("/ads/:id", async (req, res) => {
    try {
        // send all ads
        res.json(
            await Ads.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Ads DELETE ROUTE
app.delete("/ads/:id", async (req, res) => {
    try {
        // send all ads
        res.json(await Ads.findByIdAndRemove(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));