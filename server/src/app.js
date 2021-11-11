const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('/models');


const app = express();
app.use(morgan('combine'));
app.use(express.json());
app.use(cors());


app.get('/api/v1', (req, res)=>{
    res.json({message: "hello there"});
});

app.post('/api/v1', (req, res)=>{
    res.json({message: "hello there "+req.body.email});
});


const port = process.env.PORT || 8081;

sequelize.sync()
.then(()=>{
    app.listen(port, ()=>console.log(`Port listening on ${port}`));

});
