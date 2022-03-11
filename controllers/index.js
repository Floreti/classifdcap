require('../config/db.connection');

module.exports = {
    // This is exporting my User controller
    User: require('./user_controller'),
    // This is exporting my Ad controller
    Ad: require('./ad_controller'),
    // This is exporting my Category controller
    Category: require('./category_controller'),
    // This is exporting my Location controller
    Location: require('./location_controller')
}