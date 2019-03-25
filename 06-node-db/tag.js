/**
 * Will contain our task model
 */

module.exports = function (sequelize, DataTypes) {
    const Tag = sequelize.define('tag', {
        title: DataTypes.STRING
    });
    return Tag;
}