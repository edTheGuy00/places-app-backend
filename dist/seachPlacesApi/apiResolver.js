'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Query: {
    searchNearby: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parent, args) {
        var location, radius, key, result, parsed;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                location = args.location, radius = args.radius, key = args.key;
                _context.next = 3;
                return (0, _requestPromise2.default)('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + location + '&radius=' + radius + '&key=' + key);

              case 3:
                result = _context.sent;
                parsed = JSON.parse(result);
                return _context.abrupt('return', parsed.results);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function searchNearby(_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  }
};