'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _graphqlYoga = require('graphql-yoga');

var _models = require('./models');

var _models2 = _interopRequireDefault(_models);

var _typeDefs = require('./typeDefs');

var _typeDefs2 = _interopRequireDefault(_typeDefs);

var _resolvers = require('./resolvers');

var _resolvers2 = _interopRequireDefault(_resolvers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _graphqlYoga.GraphQLServer({
  typeDefs: _typeDefs2.default,
  resolvers: _resolvers2.default,
  context: function context(req) {
    return (0, _extends3.default)({}, req, {
      models: _models2.default
    });
  }
});

_models2.default.sequelize.sync().then(function () {
  server.start(function () {
    return console.log('Server is running');
  });
});