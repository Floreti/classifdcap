// const express = require('express');
// const router = express.Router();
// const db = require('../models')


// router.get('/', async (req, res, next) => {

//     try {
//         const products = await db.Product.find({});
//         const context = { products }
//         return res.render('index.ejs', context);
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

// router.post('/', async (req, res, next) => {

//     // Start by console logging things out here for the req, then req.body
//     try {
//         const createdProduct = await db.Product.create(req.body)
//         console.log(createdProduct);

//         res.redirect("/products");
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

// router.get("/new", function (req, res) {
//     res.render("new.ejs")
// })

// // show route
// // this route will catch GET requests to /products/index/ and respond with a single product
// router.get('/:productId', async (req, res, next) => {
//     try {
//         const foundProduct = await db.Product.findById(req.params.productId)

//         console.log(foundProduct);
//         const context = { product: foundProduct }
//         res.render('show.ejs', context)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

// router.delete('/:productId', async (req, res, next) => {
//     try {
//         const deletedProduct = await db.Product.findByIdAndDelete(req.params.productId);

//         console.log(deletedProduct);
//         res.redirect('/products');
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

// router.get('/:productId/edit', async (req, res, next) => {
//     try {
//         const updatedProduct = await db.Product.findById(req.params.productId);

//         console.log(updatedProduct);
//         return res.render('edit.ejs', { product: updatedProduct })
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

// router.put('/:productId', async (req, res, next) => {

//     try {
//         const updatedProduct = await db.Product.findByIdAndUpdate(req.params.productId, req.body);

//         console.log(updatedProduct);
//         return res.redirect('/products');
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

// module.exports = router;