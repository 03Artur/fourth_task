const ApplicationError = require('./ApplicationError');


class UnauthorizedError extends ApplicationError{
    constructor(message) {
        super(message || 'The request requires user authentication.', 401);
    }
}

module.exports = UnauthorizedError;