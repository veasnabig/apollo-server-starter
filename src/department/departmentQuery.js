const ObjectId = require('mongodb').ObjectId

const collectionName = "department"
const departmentQuery = {
    Query: {
        queryDepartments: async () => {
            return await db.collection(collectionName).find()
                .toArray()
                .then(res => { return res })
        }
    },
}

module.exports = departmentQuery