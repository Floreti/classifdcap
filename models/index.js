require('../config/db.connection');

module.exports = {
    // This is exporting my User model
    User: require('./user_model'),
    // This is exporting my Ad model
    Ad: require('./ad_model'),
    // This is exporting my Category model
    Category: require('./category_model'),
    // This is exporting my Location model
    Location: require('./location_model')
}