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
    [ROLES.USER, new Map()
        .set(ACTION.CREATE, new ActionRule(false, []))
        .set(ACTION.READ, new ActionRule(true, []))
        .set(ACTION.UPDATE, new ActionRule(true, []))
        .set(ACTION.DELETE, new ActionRule(true, []))
    ],
    [ROLES.ADMIN, new Map()
        .set(ACTION.CREATE, new ActionRule(false, allRoles))
        .set(ACTION.READ, new ActionRule(false, allRoles))
        .set(ACTION.UPDATE, new ActionRule(false, allRoles))
        .set(ACTION.DELETE, new ActionRule(false, allRoles))]
    ]);


module.exports = CRUD_ROLES_RULES;