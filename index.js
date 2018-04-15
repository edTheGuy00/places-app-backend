import { GraphQLServer } from 'graphql-yoga';

import models from './src/models';
import schema from './src/schema';
import resolver from './src/resolver';

const server = new GraphQLServer({ schema, resolver });

models.sequelize.sync().then(() => {
  server.start(() => console.log('Server is running on localhost:4000'));
});

