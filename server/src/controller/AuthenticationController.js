const {User} = require('../models');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

// console.log(user);

function jwtSignUser (user) {
    const ONE_WEEK = 60*60*24*7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    });
}

module.exports.registerUser = async (req, res)=>{
    try {
        const user = await User.create(req.body);
        return res.json({user});
    } catch (error) {
        return res.json({msg: error.errors[0].message});        
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
        }

        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) {
            return res.json({error: 'Incorrect Password'});
        }

        return res.json({user,token: jwtSignUser({user})});
    } catch (error) {
        return res.json({error: error});         
    }
};

module.exports.getAllUsers = (req, res)=>{
    res.json({message: "hello there"});
};
