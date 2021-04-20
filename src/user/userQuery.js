const ObjectId = require('mongodb').ObjectId

const userQuery = {
    Query: {
        queryUsers: async () => {
            return await db.collection("user").find()
                .sort({ _id: -1 })
                .toArray()
                .then(res => { return res })
        }
    },
    User: {
        departmentDoc: async (args) => {
            const findDepartment = await db.collection("department")
                .findOne({ _id: ObjectId(args.departmentID) })
            return findDepartment;
        }
    }
}

module.exports = userQuery