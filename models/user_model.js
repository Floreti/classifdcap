const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your Full Name."],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter your Email."],
    },
    phone: {
        type: String,
        required: [true, "Phone Number"],
    },
    password: {
        type: String,
        required: [true, "Password"],
    },
    // // relationship to ad
    // ad: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "Ad",
    // },
    
},
    {
        timestamps: true // this will add a time stamp with the fields createdAt and updatedAt
    });

const User = mongoose.model('User', userSchema);

module.exports = User;
