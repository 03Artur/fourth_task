const User = require('../models/user.model');


const createUser = async (req, res, next) => {
    try {

        res.send(await User.create(req.body));
    } catch (e) {
        next(e);
    }
};

const getUserById = async (req, res, next) => {
    try {
        res.send(await User.findById(req.params.id));
    } catch (e) {
        next(e);
    }
};

const updateUserById = async (req, res, next) => {
    try {

        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true}

            );

        res.send(user);
    } catch (e) {
        next(e);
    }
};

const deleteUserById = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.send(user);
    } catch (e) {
        next(e);
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        res.send(await User.find({}));
    } catch (e) {
        next(e);
    }
};


module.exports = {
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
    getAllUsers,
};