"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: {
    allPlaces: function allPlaces(parent, args, _ref) {
      var models = _ref.models;
      return models.Place.findAll();
    }
  },
  Mutation: {
    addPlace: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parent, args, _ref3) {
        var models = _ref3.models;
        var userId, place;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return models.User.findOne({ where: { phoneId: args.phoneId } });

              case 2:
                userId = _context.sent;
                _context.next = 5;
                return models.Place.create((0, _extends3.default)({}, args, {
                  user_id: userId.id
                }));

              case 5:
                place = _context.sent;
                return _context.abrupt("return", place);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function addPlace(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }()
  }
};