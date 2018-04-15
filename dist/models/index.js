'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize2.default({
  dialect: 'postgres',
  operatorsAliases: _sequelize2.default.Op,
  define: {
    underscored: true
  }
});

var models = {
  User: sequelize.import('./user'),
  Place: sequelize.import('./place')
};

(0, _keys2.default)(models).forEach(function (modelName) {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = _sequelize2.default;

exports.default = models;