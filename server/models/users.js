const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserModel = new Schema({
    id: String,
    name: String,
    items: Array,
    address: String,
    pincode: String,
})

module.exports = mongoose.model('UserModel', UserModel)
