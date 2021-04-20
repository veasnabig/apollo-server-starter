// user
const userQuery = require("./user/userQuery")
const userMutation = require("./user/userMutation")

// department
const departmentQuery = require("./department/departmentQuery")
const departmentMutation = require("./department/departmentMutation")

exports.resolvers = [
    userQuery,
    userMutation,
    departmentMutation,
    departmentQuery
]