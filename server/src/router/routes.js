const express = require('express');
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy');
const {registerUser, login, getAllUsers} = require('../controller/AuthenticationController');
const router = express.Router();

router.route('/').get(getAllUsers);
router.route('/register').post(AuthenticationControllerPolicy.registerUser, registerUser);
router.route('/login').post(login);

module.exports = router;
