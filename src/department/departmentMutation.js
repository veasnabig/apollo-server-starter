const { AuthenticationError } = require('apollo-server')
const ObjectId = require('mongodb').ObjectId

const collectionName = "department"

const userMutation = {
    Mutation: {
        createDepartment: async (_, args, context,) => {
            const { input } = args
            const insertDoc = await db.collection(collectionName).insertOne(input)
            // console.log(insertDoc.ops[0])
            return insertDoc.ops[0]
        },
    },
}

module.exports = userMutation