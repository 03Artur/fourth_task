const {UnauthorizedError} = require('../errors');


module.exports = (req, res, next) => {
    try {
        ;

        if (req.headers.id && req.headers.role) {
            next();
        } else {
            next(new UnauthorizedError());
        }
    } catch (e) {
        next(e);
    }
};