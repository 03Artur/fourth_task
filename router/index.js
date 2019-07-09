const express = require('express');
const router = express.Router();
const user_controller = require('./user.controllers');
const {createUserCheckAccess, readUpdateDeleteUserCheckAccess} = require('../utils/middlewares/checkAccess');
const checkAuthorization = require('../utils/middlewares/checkAuthorization');
const {createUserValidation, updateUserValidation} = require('../utils/middlewares/userValidation');
const cryptPassword = require('../utils/middlewares/cryptPassword');
const {ACTION} = require('../utils/constants');

router.get('/user/:id',
    checkAuthorization,
    readUpdateDeleteUserCheckAccess(ACTION.READ),
    user_controller.getUserById
);

router.post('/user/',
    checkAuthorization,
    createUserCheckAccess,
    createUserValidation,
    cryptPassword,
    user_controller.createUser
);

router.put('/user/:id',
    checkAuthorization,
    readUpdateDeleteUserCheckAccess(ACTION.UPDATE),
    updateUserValidation,
    user_controller.updateUserById
);

router.delete('/user/:id',
    checkAuthorization,
    readUpdateDeleteUserCheckAccess(ACTION.DELETE),
    user_controller.deleteUserById
);

module.exports = router;