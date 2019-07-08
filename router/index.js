const express = require('express');
const router = express.Router();
const user_controller = require('./user.controllers');
const checkAccess = require('../utils/middlewares/checkAccess');

router.get('/user/:id',checkAccess, user_controller.getUserById);
router.post('/user/',checkAccess, user_controller.createUser);
router.put('/user/:id',checkAccess, user_controller.updateUserById);
router.delete('/user/:id',checkAccess, user_controller.deleteUserById);

module.exports = router;