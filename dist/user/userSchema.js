"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var userSchema = "\n\n  type User {\n    id: Int!\n    places: [Place!]\n  }\n\n  type Query {\n    me(phoneId: String!): User!\n  }\n\n  type Mutation {\n    newUser(phoneId: String!): String!\n  }\n";

exports.default = userSchema;