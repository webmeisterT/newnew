module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'root',
        password:  process.env.DB_PASS || 'root',
        dialect: 'mysql',
        host: 'localhost',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
          }
    },
    /* db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password:  process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite3'
        }
    }, */
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
    }
};