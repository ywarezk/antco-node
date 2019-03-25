/**
 * Will contain our task model
 */

module.exports = function (sequelize, DataTypes) {
    const Task = sequelize.define('task', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        time: DataTypes.DATE
    });
    return Task;
}