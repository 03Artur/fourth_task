const bcrypt = require("bcrypt");
const {SALT, SALT_ROUND} = require("../constants");

module.exports = async (req, res, next) => {

    try {
        const salt = await bcrypt.genSalt(SALT_ROUND);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        next();
    } catch (e) {
        next(e);
    }
};