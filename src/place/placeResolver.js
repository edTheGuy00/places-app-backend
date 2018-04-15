export default {
  Query: {
    allPlaces: (parent, args, { models }) => models.Place.findAll(),
  },
  Mutation: {
    addPlace: async (parent, args, { models }) => {
      const userId = await models.User.findOne({ where: { phoneId: args.phoneId } });
      const place = await models.Place.create({
        ...args,
        user_id: userId.id,
      });
      return place;
    },
  },
};
