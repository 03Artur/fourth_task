const mongoose = require('mongoose');
const {ROLES, GENDER, REGEXP} = require('../utils/constants');

const nameSchema = {
    type: String,
    required: true,
    match: REGEXP.name,
};

const Schema = new mongoose.Schema({
    firstName: nameSchema,
    lastName: nameSchema,
    email: {
        type: String,
        minLength: 3,
        maxLength: 254,
        unique: true,
        required: true,

    },
    password: {
        type: String,
        select: false,
        required: true,
    },
    gender: {
        type: String,
        enum: Object.values(GENDER),
        required: true,
    },
    role: {
        type: String,
        enum: Object.values(ROLES),
        default: ROLES.USER,
        required: true,
    }
});


const User = mongoose.model('User', Schema);

module.exports = User;