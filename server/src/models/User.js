
module.exports = (sequelize, DataTypes) => { const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {type: DataTypes.STRING }
}
);

return User;

};

