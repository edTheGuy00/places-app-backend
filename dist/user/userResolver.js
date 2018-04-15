"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: {
    me: function me(parent, _ref, _ref2) {
      var phoneId = _ref.phoneId;
      var models = _ref2.models;
      return models.User.findOne({ where: { phoneId: phoneId } });
    }
  },
  User: {
    places: function places(parent, args, _ref3) {
      var models = _ref3.models;

      var userId = parent.dataValues.id;
      return models.Place.findAll({ where: { user_id: userId } });
    }
  },
  Mutation: {
    newUser: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parent, args, _ref5) {
        var models = _ref5.models;
        var user;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return models.User.create(args);

              case 2:
                user = _context.sent;
                return _context.abrupt("return", user.id);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function newUser(_x, _x2, _x3) {
        return _ref4.apply(this, arguments);
      };
    }()
  }
};