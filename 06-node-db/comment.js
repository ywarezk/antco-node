/**
 * Will contain our task model
 */

module.exports = function (sequelize, DataTypes) {
    const Comment = sequelize.define('comment', {
        title: DataTypes.STRING,
        tableName: DataTypes.STRING,
        userOrTaskId: DataTypes.INTEGER
    });
    return Comment;
};