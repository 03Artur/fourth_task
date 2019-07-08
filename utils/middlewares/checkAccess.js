const CRUD_ROLES_RULES = require('../crud/rules');
const {ROLES, ACTION} = require('../constants');
const {ForbiddenError} = require('../errors')

/**
 * @param {} action
 * */
function checkAccess(actorRole, objRole, action, isToSelf = false) {
    return isToSelf ?
        CRUD_ROLES_RULES.get(actorRole).get(action).toSelf :
        CRUD_ROLES_RULES.get(actorRole).get(action).toOther.includes(objRole);
}


module.exports = (req, res, next) => {

    try {
        if (checkAccess(ROLES.ADMIN, ROLES.USER, req.method,)) {
            next();

        } else {
            throw new ForbiddenError();
        }

    } catch (e) {
        next(e);
    }
};