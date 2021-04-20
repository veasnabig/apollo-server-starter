const { gql } = require('apollo-server');

const userType = gql`
  type User {
    username: String
    role: String
    departmentDoc: Department
  }

  input UserInput{
    username: String
    role: String
    departmentID: String
  }

  extend type Query {
    queryUsers: [User]
  }

  extend type Mutation {
    register(input: UserInput): User
  }
`;

module.exports = userType