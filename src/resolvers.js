import { mergeResolvers } from 'merge-graphql-schemas';

import userResolver from './user/userResolver';
import placeResolver from './place/placeResolver';

const allResolvers = [
  userResolver,
  placeResolver,
];

const resolvers = mergeResolvers(allResolvers, { all: true });

export default resolvers;
