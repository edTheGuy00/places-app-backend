'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (sequelize, DataTypes) {
  var User = sequelize.define('user', {
    phoneId: DataTypes.STRING
  });

  User.associate = function (models) {
    models.User.hasMany(models.Place);
  };

  return User;
};