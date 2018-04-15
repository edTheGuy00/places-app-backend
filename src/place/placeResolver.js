export default {
  Query: {
    allPlaces: (parent, args, { models }) => models.Place.findAll(),
  },
};
