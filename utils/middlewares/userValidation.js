const yup = require('yup');
const {ROLES, GENDER, REGEXP} = require('../constants');
const {BadRequestError} = require('../errors');

const nameRule = yup.string().min(1).max(20);
const emailRule = yup.string().email();
const passwordRule = yup.string().matches(REGEXP.password);
const genderRule = yup.string().oneOf(Object.values(GENDER));
const roleRule = yup.string().oneOf(Object.values(ROLES));

const validationSchemas = {
    post:  yup.object({
        firstName: nameRule.required(),
        lastName: nameRule.required(),
        email: emailRule.required(),
        password: passwordRule.required(),
        gender: genderRule.required(),
        role: roleRule.required(),
    }),
    put:yup.object({
        firstName: nameRule,
        lastName: nameRule,
        email: emailRule,
        password: passwordRule,
        gender: genderRule,
        role: roleRule,
    })
};
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}


const userValidation = async (req, res, next) => {
    try {

        if (await validationSchemas[req.method.toLowerCase()].isValid(req.body) && !isEmpty(req.body)) {
            next();
        } else {
            next(new BadRequestError());
        }
    } catch (e) {
        next(e);
    }
};


module.exports = {
    userValidation,
};

