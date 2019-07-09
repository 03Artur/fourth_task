const User = require('../models/user.model');
const {NotFoundError, BadRequestError} = require('../utils/errors')

const createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
        if(!user){
            next(new BadRequestError())
        }
        res.send(user);
    } catch (e) {
        next(e);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
             next(new NotFoundError);
        }
        res.send(user);
    } catch (e) {
        next(e);
    }
};

const updateUserById = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!user) {
             next(new NotFoundError());
        }
        res.send(user);
    } catch (e) {
        next(e);
    }
};

const deleteUserById = async (req, res, next) => {
    try {
        console.log('>>>>>>>>>>>>>>>>>>>>');

        const user = await User.findByIdAndDelete(req.params.id);
        console.log('>>>>>>>>>>>>>>>>>>>>');
        if (!user) {
             next(new NotFoundError());
        }
        res.send(user);
    } catch (e) {
        next(e);
    }
};


module.exports = {
    createUser,
    getUserById,
    updateUserById,
    deleteUserById,
};