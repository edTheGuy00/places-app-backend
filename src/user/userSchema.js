const userSchema = `

  type User {
    id: Int!
    places: [Place!]
  }

  type Query {
    me(phoneId: String): User!
  }

  type Mutation {
    newUser(phoneId: String): String!
  }
`;

export default userSchema;
