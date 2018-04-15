"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var apiSchema = "\n\n  type Query {\n    searchNearby(location: String!, radius: Int!, key: String!): [Result!]!\n  }\n\n  type Result {\n    geometry: Geometry!\n    icon: String!\n    id: String!\n    name: String!\n    opening_hours: Hours\n    place_id: String!\n  }\n\n  type Geometry {\n    location: Location!\n  }\n\n  type Location {\n    lat: Float\n    lng: Float\n  }\n\n  type Hours {\n    open_now: Boolean\n  }\n";

exports.default = apiSchema;