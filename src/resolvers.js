import { mergeResolvers } from 'merge-graphql-schemas';

import userResolver from './user/userResolver';
import placeResolver from './place/placeResolver';
import apiResolver from './seachPlacesApi/apiResolver';

const allResolvers = [
  userResolver,
  placeResolver,
  apiResolver,
];

const resolvers = mergeResolvers(allResolvers, { all: true });

export default resolvers;
