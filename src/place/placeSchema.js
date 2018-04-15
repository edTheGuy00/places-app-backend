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
`;

export default placeSchema;
