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
app.use((req, res, next) => {
    res.setHeader('Access-Control-ALlow-Origin', 'http://localhost' + config.port);
    res.setHeader('Access-Control-ALlow-Headers', 'Content-type,Authorization');
    next();
});
app.use('/api/v1', routes);


sequelize.sync()
.then(()=>{
    app.listen(config.port, ()=>console.log(`Port listening on ${config.port}`));

})
.catch((error) => { console.log('Cannot connect to mysql: ' + error);
});
