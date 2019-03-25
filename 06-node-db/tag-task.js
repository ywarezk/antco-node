/**
 * Will contain our task model
 */

module.exports = function (sequelize, DataTypes) {
    const TagTAsk = sequelize.define('tag_task', {
        tagId: DataTypes.INTEGER,
        taskId: DataTypes.INTEGER
    });
    return TagTAsk;
}