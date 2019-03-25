/**
 * Will contain our task model
 */

module.exports = function (sequelize, DataTypes) {
    const UserSettings = sequelize.define('user_settings', {
        isEmail: DataTypes.BOOLEAN
    });
    return UserSettings;
}