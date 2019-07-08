const {ROLES, ACTION} = require('../constants');


class ActionRule {
    /**
     * @param {boolean} toSelf - possibility of acting on yourself
     * @param {Array.<ROLES>} toOther - array of roles over which action is possible
     */

    constructor(toSelf = false, toOther = []) {
        this.toSelf = toSelf;
        this.toOther = toOther;
    }
}

const allRoles = Object.values(ROLES);

const CRUD_ROLES_RULES = new Map([
    [
        ROLES.USER, new Map([
        [ACTION.CREATE, new ActionRule(true, [])],
        [ACTION.READ, new ActionRule(true, [])],
        [ACTION.UPDATE, new ActionRule(true, [])],
        [ACTION.DELETE, new ActionRule(true, [])],
    ]),
    ],
    [
        ROLES.ADMIN, new Map([
        [ACTION.CREATE, new ActionRule(false, allRoles)],
        [ACTION.READ, new ActionRule(false, allRoles)],
        [ACTION.UPDATE, new ActionRule(false, allRoles)],
        [ACTION.DELETE, new ActionRule(false, allRoles)],
    ]),
    ],
]);

module.exports = CRUD_ROLES_RULES;