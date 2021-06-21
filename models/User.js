const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date()}
})

const User = mongoose.model('User', userSchema)

module.exports = User