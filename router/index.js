const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {createUserCheckAccess, readUpdateDeleteUserCheckAccess} = require('../utils/middlewares/checkAccess');
const checkAuthorization = require('../utils/middlewares/checkAuthorization');
const {userValidation} = require('../utils/middlewares/userValidation');
const cryptPassword = require('../utils/middlewares/cryptPassword');
const {ACTION} = require('../utils/constants');

router.get('/user/:id',
    checkAuthorization,
    readUpdateDeleteUserCheckAccess(ACTION.READ),
    userController.getUserById
);

router.post('/user/',
    checkAuthorization,
    createUserCheckAccess,
    userValidation,
    cryptPassword,
    userController.createUser
);

router.put('/user/:id',
    checkAuthorization,
    readUpdateDeleteUserCheckAccess(ACTION.UPDATE),
    userValidation,
    userController.updateUserById
);

router.delete('/user/:id',
    checkAuthorization,
    readUpdateDeleteUserCheckAccess(ACTION.DELETE),
    userController.deleteUserById
);

module.exports = router;