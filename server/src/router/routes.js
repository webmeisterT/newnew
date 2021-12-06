const express = require('express');
const AuthControllerPolicy = require('../policies/AuthenticationControllerPolicy');
const {registerUser, login, getAllUsers, getAllSongs, getSingleSong, postAllSongs} = require('../controller/AuthenticationController');
const router = express.Router();


router.route('/').get(getAllUsers);
router.route('/songs').get(getAllSongs);
router.route('/songs/:songId').get(getSingleSong);
router.route('/register').post(AuthControllerPolicy.registerUser, registerUser);
router.route('/login').post(AuthControllerPolicy.loginUser,login);
router.route('/songs').post(postAllSongs);


module.exports = router;
