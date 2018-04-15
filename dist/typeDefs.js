'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _userSchema = require('./user/userSchema');

var _userSchema2 = _interopRequireDefault(_userSchema);

var _placeSchema = require('./place/placeSchema');

var _placeSchema2 = _interopRequireDefault(_placeSchema);

var _apiSchema = require('./seachPlacesApi/apiSchema');

var _apiSchema2 = _interopRequireDefault(_apiSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var types = [_userSchema2.default, _placeSchema2.default, _apiSchema2.default];

var typeDefs = (0, _mergeGraphqlSchemas.mergeTypes)(types, { all: true });

exports.default = typeDefs;