export default {
  Query: {
    me: (_, { name }) => `Hello ${name || 'World'}`,
  },
};
