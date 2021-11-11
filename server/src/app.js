const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize, User } = require('./models');
const config = require('./config/config');


const app = express();
app.use(morgan('combine'));
app.use(express.json());
app.use(cors());


app.get('/api/v1', (req, res)=>{
    res.json({message: "hello there"});
});

app.post('/api/v1', async (req, res)=>{
    try {
        const user = await User.create(req.body);
        return res.json({data:user});
    } catch (error) {
        return res.json({msg: error.errors[0].message});        
    }

    // res.json({message: "hello there "+req.body.email});
});



sequelize.sync()
.then(()=>{
    app.listen(config.port, ()=>console.log(`Port listening on ${config.port}`));

});
