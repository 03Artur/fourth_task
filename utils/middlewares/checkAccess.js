const CRUD_ROLES_RULES = require('../crud/rules');
const {ROLES, ACTION} = require('../constants');
const {ForbiddenError, NotFoundError} = require('../errors');
const User = require('../../models/user.model');

/**
 *
 *Checks access rights
 *
 * @param {ACTION} action - type of action
 * @param {ROLES} actorRole - access role of actor
 * @param {ROLES} objRole - access role of object
 * @param {boolean} isToSelf - is an action on oneself
 * @returns {boolean}
 * */
function checkAccessToSelf(action, actorRole) {
    return CRUD_ROLES_RULES.get(actorRole).get(action).toSelf;
}

/**
 *
 * @param{ACTION} action
 * @param{ROLES} actorRole
 * @param{ROLES} objRole
 * @returns {boolean}
 */
function checkAccessToOther(action, actorRole, objRole) {
    console.log("3");

    return (CRUD_ROLES_RULES.get(actorRole).get(action).toOther.includes(objRole));
}

function createUserCheckAccess(req, res, next) {
    try {
        if (checkAccessToOther(ACTION.CREATE, req.headers.role, req.body.role)) {
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

    const checkActionAccess = async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id);

            if ((req.headers.id === user.id ?
                checkAccessToSelf(actionType, req.headers.role) :
                checkAccessToOther(actionType, req.headers.role, user.role))) {
                next();
            } else {
                next(new ForbiddenError());
            }

        } catch
            (e) {
            next(e)
        }
    };
    return checkActionAccess;
}

module.exports = {
    createUserCheckAccess,
    readUpdateDeleteUserCheckAccess,
};