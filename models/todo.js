module.exports = (sequelize, DataTypes) => {
    sequelize.define('todo', {
        text: {
            type: DataTypes.STRING(200),
            allowNull: false,
        }
    }, {
        timpstamps: true,
        paranoid: true,
    })
}