const express = require('express');
const router = express.Router();
const db = require('../models')

//index route
router.get('/', async (req, res, next) => {

    try {
        const ads = await db.Ad.find({});
        const context = { ads }
        return res.render('index', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

//create route
router.post('/', async (req, res, next) => {

    // Start by console logging things out here for the req, then req.body
    try {
        const createdAd = await db.Ad.create(req.body)
        console.log(createdAd);

        res.redirect("/");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// show route
// this route will catch GET requests to /products/index/ and respond with a single product
router.get('/:adId', async (req, res, next) => {
    try {
        const foundAd = await db.Ad.findById(req.params.adId)

        console.log(foundAd);
        const context = { ad: foundAd }
        res.render('Show', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

//delete route
router.delete('/:adId', async (req, res, next) => {
    try {
        const deletedAd = await db.Ad.findByIdAndDelete(req.params.adId);

        console.log(deletedAd);
        res.redirect('/Ads');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//edit route
router.get('/:adId/edit', async (req, res, next) => {
    try {
        const updatedAd = await db.Ad.findById(req.params.adId);

        console.log(updatedAd);
        return res.render('Edit', { product: updatedProduct })
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//update route
router.put('/:adId', async (req, res, next) => {

    try {
        const updatedAd = await db.Ad.findByIdAndUpdate(req.params.adId, req.body);

        console.log(updatedAd);
        return res.redirect('/Ads');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

module.exports = router;