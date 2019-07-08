const User = require('../models/user.model');

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        req.send(user);
    } catch (e) {
        next(e);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        req.send(user);
    } catch (e) {
        next(e);
    }
};

const updateUserById = async (req, res, next) => {
    try {
        const user = await User.findOneAndUpdate(req.params.id, req.body);
        req.send(user);
    } catch (e) {
        next(e);
    }
};

const deleteUserById = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        req.send(user);
    } catch (e) {
        next(e);
    }
};


module.exports = {createUser, getUserById, updateUserById, deleteUserById};