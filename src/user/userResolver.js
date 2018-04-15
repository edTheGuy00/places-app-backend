export default {
  Query: {
    me: (parent, { phoneId }, { models }) =>
      models.User.fineOne({ where: { phoneId } }),
  },
  User: {
    places: (parent, args, { models, user }) =>
      models.Place.findAll({ where: { userId: user.id } }),
  },
  Mutation: {
    newUser: async (parent, args, { models }) => {
      const user = await models.User.create(args);
      return user.id;
    },
  },
};
