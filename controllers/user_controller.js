// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcryptjs");
// const { User } = require("../models");

// router.get("/register", function (req, res) {
//     return res.render("register");
// });

// router.post("/register", async function (req, res) {
//     try {
//         // step check if user exists
//         const foundUser = await User.exists({ email: req.body.email });
//         // if so redirect to login
//         if (foundUser) {
//             console.log("This email is already registered. Please log-in.")
//             return res.redirect("/login");
//         }
//         // if not create user and redirect to login

//         // salt will created a more complicated hash
//         const salt = await bcrypt.genSalt(12);
//         // hash will convert our password into something more secure
//         // test1234 => "$2a$10$5vR9VhGpkARz6EFPdkuNQ.aZNRGUgSCNSKEb9Xp1IKzrfxYETlkB2"
//         const hash = await bcrypt.hash(req.body.password, salt);

//         req.body.password = hash;

//         // create user in database
//         const newUser = await User.create(req.body);
//         console.log(newUser);

//         return res.redirect("/login");
//     } catch (err) {
//         console.log(err);
//         return res.send(err);
//     }
// });

// router.get("/login", function (req, res) {
//     res.render("login");
// });

// router.post("/login", async function (req, res) {
//     try {
//         // check if the user exists
//         const foundUser = await User.findOne({ email: req.body.email });
//         console.log(`foundUser object is ${foundUser}`);
//         // if not
//         // redirect to register
//         if (!foundUser) return res.send("Either the username or the password is incorrect");

//         // if the user exists
//         // validate the user if passwords match -> login
//         // .compare(body password, hashed password) => return true or false
//         const match = await bcrypt.compare(req.body.password, foundUser.password);

//         // if not match send error
//         if (!match) return res.send("Either the username or the password is incorrect");

//         console.log(`The before version of req.session.currentUser is: ${req.session.currentUser}`)

//         // if match create the session and redirect to home\
//         // here we have created the key card
//         req.session.currentUser = {
//             id: foundUser._id,
//             username: foundUser.username,
//         };

//         console.log(req.session.currentUser)

//         return res.redirect("/products");
//     } catch (err) {
//         console.log(err);
//         res.send(err);
//     }
// });

// router.get("/logout", async function (req, res) {
//     try {

//         await req.session.destroy();
//         return res.redirect("/login");

//     } catch (error) {
//         console.log(error);
//         return res.send(error);
//     }
// });

// module.exports = router;