const { gql } = require('apollo-server');

const userType = require("./user/userType")
const departmentType = require("./department/departmentType")

const typeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  ${userType}
  ${departmentType}
`;

module.exports = typeDefs