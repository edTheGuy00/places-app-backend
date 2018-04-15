import { mergeTypes } from 'merge-graphql-schemas';

import userSchema from './user/userSchema';
import placeSchema from './place/placeSchema';
import apiSchema from './seachPlacesApi/apiSchema';

const types = [
  userSchema,
  placeSchema,
  apiSchema,
];

const typeDefs = mergeTypes(types, { all: true });

export default typeDefs;
