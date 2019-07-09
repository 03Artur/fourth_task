const mongoose = require('mongoose');
const {URL, DBNAME} = require('../utils/constants');
require('../models/user.model');

mongoose.connect(`${URL.DB}${DBNAME}`, {useNewUrlParser: true}, (err) => {
    if (err) {
        process.exit(1);
    } else {
        console.log("DB connection success");
    }


});

mongoose.set('debug', true);

module.exports = mongoose;