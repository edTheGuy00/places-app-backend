import { GraphQLServer } from 'graphql-yoga';

import models from './src/models';
import typeDefs from './src/typeDefs';
import resolvers from './src/resolvers';

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    models,
  }),
});

models.sequelize.sync().then(() => {
  server.start(() => console.log('Server is running on localhost:4000'));
});

