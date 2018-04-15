"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var placeSchema = "\n  type Query {\n      allPlaces: [Place!]!\n  }\n\n  type Place {\n    placeId: String!\n    lat: Float!\n    lng: Float!\n    name: String!\n    image: String\n  }\n\n  type Mutation {\n    addPlace(\n      phoneId: String!\n      placeId: String!,\n      lat: Float!,\n      lng: Float!,\n      name: String!,\n      image: String): Place\n  }\n";

exports.default = placeSchema;