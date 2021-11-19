const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');
const routes = require('./router/routes');



const app = express();
app.use(morgan('combine'));
app.use(express.json());
app.use(cors());
app.use('/api/v1', routes);


sequelize.sync()
.then(()=>{
    app.listen(config.port, ()=>console.log(`Port listening on ${config.port}`));

});
