'use strict';
module.exports = (sequelize, DataTypes) => {
  const guest = sequelize.define('guest', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {});
  guest.associate = function(models) {
    // associations can be defined here
  };
  return guest;
};