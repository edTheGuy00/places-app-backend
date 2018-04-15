export default {
  Query: {
    me: (parent, { phoneId }, { models }) =>
      models.User.findOne({ where: { phoneId } }),
  },
  User: {
    places: (parent, args, { models }) => {
      const userId = parent.dataValues.id;
      return models.Place.findAll({ where: { user_id: userId } });
    },
  },
  Mutation: {
    newUser: async (parent, args, { models }) => {
      const user = await models.User.create(args);
      return user.id;
    },
  },
};
