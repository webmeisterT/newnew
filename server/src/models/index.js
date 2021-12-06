// const fs = require('fs');
// const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/config');


const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        dialect: config.db.dialect,

        // operatorsAliases: false,
        pool: {
            max: config.db.pool.max,
            min: config.db.pool.min,
            acquire: config.db.pool.acquire,
            idle: config.db.pool.idle
          }
    }
    // config.db.options
);


const db = {};

/* fs
.readdirSync(__dirname)
.filter((file)=>file !== 'index.js')
.forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    //  sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
}); */

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require('./User')(sequelize, Sequelize);
db.Songs = require('./Songs')(sequelize, Sequelize);

module.exports = db;
