const Joi = require('joi');

module.exports.registerUser = (req, res, next) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        email: Joi.string().required().email(),
        password: Joi.string().required().regex(
            new RegExp('^[a-zA-Z0-9]{8,32}$')
        )
    });

    const {error, value} = schema.validate(req.body);

    if (error) {
        switch (error.details[0].context.key) {
            case 'id':
                res.json({error: 'You must provide an id'});
                break;        
            case 'email':
                res.json({error: 'You must provide a valid email address'});
                break;        
            case 'password':
                res.json({error: "Your password must be lowercase or uppercase or numbers and atleast 8 characters long and not more than 32 characters."});
                break;        
            default:
                res.json({error});
                break;
        }
    } else if (value) {
        next();
    }
}
;