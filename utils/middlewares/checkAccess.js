const CRUD_ROLES_RULES = require('../crud/rules');
const {ROLES, ACTION} = require('../constants');
const {ForbiddenError, NotFoundError} = require('../errors');
const User = require('../../models/user.model');

/**
 *
 * @param actionType{ACTION}
 * @param actorRole{ROLES}
 * @param objRole{ROLES}
 * @param isToSelf{boolean}
 * @returns {boolean}
 */
function checkAccess(actionType, actorRole, objRole, isToSelf = false) {
    ;

    return isToSelf ?
        CRUD_ROLES_RULES.get(actorRole).get(actionType).toSelf :
        CRUD_ROLES_RULES.get(actorRole).get(actionType).toOther.includes(objRole);
}

/**
 *
 * @param req
 * @param res
 * @param next
 */
function createUserCheckAccess(req, res, next) {
    try {
        ;
        if (checkAccess(ACTION.CREATE, req.headers.role, req.body.role)) {
            next();
        } else {
            next(new ForbiddenError());
        }

    } catch (e) {
        next(e);
    }
}

/**
 *
 * @param {ACTION} actionType - one of action types
 *
 * @returns function
 * */
function readUpdateDeleteUserCheckAccess(actionType) {
    return async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                next(new NotFoundError())
            }
            else if (checkAccess(actionType, req.headers.role, user.role, req.headers.id === user.id)) {
                next();
            } else {
                next(new ForbiddenError());
            }

        } catch (e) {
            next(new NotFoundError())
        }
    };
}

module.exports = {
    createUserCheckAccess,
    readUpdateDeleteUserCheckAccess,
};