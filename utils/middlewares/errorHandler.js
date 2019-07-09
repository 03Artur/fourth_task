const {ApplicationError} = require('../errors');

module.exports = (err, req, res, next) => {
    ;

    if (err instanceof ApplicationError) {
        res.status(err.status).send(err.message);
    } else if (err.name === 'MongoError') {
        ;
        res.end();
    } else {
        res.status(500).send("Internal Server Error");
    }
};