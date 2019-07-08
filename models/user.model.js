const mongoose = require('mongoose');
const {ROLES, GENDER} =require('../utils/constants');

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 20,
        match: /[A-Z][a-z]*/
    },
    lastName: {},
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