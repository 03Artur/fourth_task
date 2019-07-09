const yup = require('yup');
const {ROLES, GENDER, REGEXP} = require('../constants');
const {BadRequestError} = require('../errors');

const createUserSchema = yup.object({

    firstName: yup
        .string()
        .required()
        .min(1)
        .max(20),
    lastName: yup
        .string()
        .required()
        .min(1)
        .max(20),
    email: yup
        .string()
        .email(),
    password: yup
        .string()
        .required()
        .matches(REGEXP.password),
    gender: yup.string()
        .required()
        .oneOf(Object.values(GENDER)),
    role: yup.string()
        .required()
        .oneOf(Object.values(ROLES)),

});
const updateUserSchema = yup.object({

    firstName: yup
        .string()
        .min(1)
        .max(20),
    lastName: yup
        .string()
        .min(1)
        .max(20),
    email: yup
        .string()
        .email(),
    password: yup
        .string()
        .matches(REGEXP.password),
    gender: yup.string()
        .oneOf(Object.values(GENDER)),
    role: yup.string()
        .oneOf(Object.values(ROLES)),

});

const createUserValidation = async (req, res, next) => {
    try {

        if (await createUserSchema.isValid(req.body)) {
            next();
        } else {
            next(new BadRequestError());
        }
    } catch (e) {
        next(e);
    }
};

const updateUserValidation = async (req, res, next) => {
    try {

        if (await updateUserSchema.isValid(req.body)) {
            next();
        } else {
            next(new BadRequestError());
        }
    } catch (e) {
        next(e);
    }

};

module.exports = {
    createUserValidation,
    updateUserValidation,
};

