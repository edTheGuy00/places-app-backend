import rp from 'request-promise';

export default {
  Query: {
    searchNearby: async (parent, args) => {
      const {
        location,
        radius,
        key,
      } = args;

      const result = await rp(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&key=${key}`);

      const parsed = JSON.parse(result);
      return parsed.results;
    },
  },
};
