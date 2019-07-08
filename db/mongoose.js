const mongoose = require('mongoose');
require('../models/user.model');

mongoose.connect('mongodb://localhost/developer_db', {useNewUrlParser: true}, (err) => {
    if (err) {
        process.exit(1);
    } else {
        console.log("DB connection success");
    }


});

mongoose.set('debug', true);

module.exports = mongoose;