const placeSchema = `
  type Query {
      allPlaces: [Place!]!
  }

  type Place {
    placeId: String!
    lat: Float!
    lng: Float!
    name: String!
    image: String
  }

  type Mutation {
    addPlace(
      phoneId: String!
      placeId: String!,
      lat: Float!,
      lng: Float!,
      name: String!,
      image: String): Place
  }
`;

export default placeSchema;
