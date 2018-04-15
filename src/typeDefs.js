import { mergeTypes } from 'merge-graphql-schemas';

import userSchema from './user/userSchema';
import placeSchema from './place/placeSchema';

const types = [
  userSchema,
  placeSchema,
];

const typeDefs = mergeTypes(types, { all: true });

export default typeDefs;
