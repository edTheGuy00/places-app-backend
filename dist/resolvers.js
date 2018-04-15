'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mergeGraphqlSchemas = require('merge-graphql-schemas');

var _userResolver = require('./user/userResolver');

var _userResolver2 = _interopRequireDefault(_userResolver);

var _placeResolver = require('./place/placeResolver');

var _placeResolver2 = _interopRequireDefault(_placeResolver);

var _apiResolver = require('./seachPlacesApi/apiResolver');

var _apiResolver2 = _interopRequireDefault(_apiResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allResolvers = [_userResolver2.default, _placeResolver2.default, _apiResolver2.default];

var resolvers = (0, _mergeGraphqlSchemas.mergeResolvers)(allResolvers, { all: true });

exports.default = resolvers;