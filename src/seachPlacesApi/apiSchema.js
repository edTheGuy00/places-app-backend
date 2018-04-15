const apiSchema = `

  type Query {
    searchNearby(location: String!, radius: Int!, key: String!): [Result!]!
  }

  type Result {
    geometry: Geometry!
    icon: String!
    id: String!
    name: String!
    opening_hours: Hours
    place_id: String!
  }

  type Geometry {
    location: Location!
  }

  type Location {
    lat: Float
    lng: Float
  }

  type Hours {
    open_now: Boolean
  }
`;

export default apiSchema;
