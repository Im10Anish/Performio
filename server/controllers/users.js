const UserModel = require('../models/users')

// Fetch all the users from database
exports.userController = async (req, res, next) => {
    try {
        const profile = await UserModel.find()
        res.status(200).json({ profile })
    } catch (e) {
        res.status(500).json(e)
    }
}

// Fetch the user on the search query provided
exports.userSearchController = async (req, res, next) => {
    try {
        const query = req.params.query
        const profile = await UserModel.find({
            $or: [{ name: { $regex: query } }],
        })
        res.status(200).json({ profile })
    } catch (e) {
        res.status(500).json(e)
    }
}
