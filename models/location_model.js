const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    zip: {
        type: Number,
        min: [5, "Please enter a valid Zip code."],
        max: [5, "Please enter a valid Zip code."],
        required: [true, "Zip Code, minimum 5 digits long."],
    },
    city: {
        type: String,
        required: [true, "Please enter City."],
    },
    state: {
        type: String,
        required: [true, "State"],
    },
    ads: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Ad"
        }
    ]


});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
