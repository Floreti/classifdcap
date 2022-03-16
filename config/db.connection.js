const mongoose = require('mongoose');
// get .env variables
require("dotenv").config();

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
const connectionStr = process.env.MONGODB_URL;

mongoose.connect(connectionStr, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => {
    console.log('Connected to MongoDB');
});
// Connection Events
mongoose.connection
    .on("open", () => console.log("Your are connected to mongoose"))
    .on("close", () => console.log("Your are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

