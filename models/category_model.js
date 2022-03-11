const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Category can not be empty"],
    },
    // // relationship to ad
    // ad: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Ad",
    // },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
