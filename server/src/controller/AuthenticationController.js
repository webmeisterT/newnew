const {User, Songs} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');
const bcrypt = require('bcrypt');


function jwtSignUser (user) {
    const ONE_WEEK = 60*60*24*7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    });
}

module.exports.registerUser = async (req, res)=>{
    try {
        const userExist = await User.findOne({
            where: { email: req.body.email }
        });
        if (userExist) {
            return res.json({error: 'A User With This Email Already Exist'});
        } 
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(req.body.password, salt);

        const user = await User.create({
            id: req.body.id,
            email: req.body.email,
            password: hashPassword
        });
        
        return res.json({user});       
    } catch (error) {
        return res.json({msg:error.errors[0].message});        
    }
};

module.exports.login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await User.findOne({
            where: {
                email:email
            }
        });

        if (!user) {
            return res.json({error: 'Incorrect Email'});
        }else{

        
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.json({error: 'Incorrect Password'});
        }
        // res.header('auth-token', jwtSignUser(user));
        res.json({user,token: jwtSignUser({user})});
        }
        // console.log('isPassword');
    } catch (error) {
        return res.json({error: error});         
    }
};

module.exports.getAllUsers = async (req, res)=>{
    try {
        const user = await User.findAll();
        res.json({user});
    } catch (error) {
        res.json({error: error});         
    }
};

module.exports.getAllSongs = async (req, res)=>{
    try {
        const songs = await Songs.findAll();
        res.json({songs});
    } catch (error) {
        res.json({error: 'error in fetching'});         
    }
};

module.exports.getSingleSong = async (req, res)=>{
    try {
        const song = await Songs.findByPk(req.params.songId);
        res.json({song});
    } catch (error) {
        res.json({error: 'error in fetching'});         
    }
};

module.exports.postAllSongs = async (req, res)=>{
    try {
        const song = await Songs.create(req.body);
        res.json({song});
    } catch (error) {
        res.json({error: error});         
    }
};
