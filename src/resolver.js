import { mergeResolvers } from 'merge-graphql-schemas';

import userResolver from './user/userResolver';

const allResolvers = [
  userResolver,
];

const resolver = mergeResolvers(allResolvers, { all: true });

export default resolver;
