const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Ad title can not be empty"],
    },
    content: {
        type: String,
        required: [true, "Please describe your posting."],
    },
    image: {
        type: String,
        required: [true, "Add images to enhance your listing"],
    },
    // relationship to location
    locations: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Location"
        }
    ],
    // relationship to user
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    // relationship to category
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
    },


},
    {
        timestamps: true // this will add a time stamp with the fields createdAt and updatedAt
    });

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;
