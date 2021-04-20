const { gql } = require('apollo-server');

const departmentType = gql`
  type Department {
    _id: String
    departmentName: String
  }

  input DepartmentInput{
    departmentName: String
  }

  extend type Query {
    queryDepartments: [Department]
  }

  extend type Mutation {
    createDepartment(input: DepartmentInput): Department
  }
`;

module.exports = departmentType