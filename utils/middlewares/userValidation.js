const yup = require('yup');
const {ROLES, GENDER} = require('../constants')

const userSchema = yup.object({

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
        .matches(/[A-Za-z0-9]{8,100}/),
    gender: yup.string()
        .required()
        .oneOf(Object.values(GENDER)),
    role: yup.string()
        .required()
        .oneOf(Object.values(ROLES)),
});


const userValidation = async (req, res, next) => {
    try {
        const user = req.body;
        await userSchema.isValid(user);
        res.end();
    } catch (e) {
        next(e);
    }

};

module.exports = userValidation;

