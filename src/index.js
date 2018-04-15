import { GraphQLServer } from 'graphql-yoga';

import models from './models';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    models,
  }),
});

models.sequelize.sync().then(() => {
  server.start(() => console.log('Server is running'));
});

