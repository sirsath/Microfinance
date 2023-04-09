const mongoose = require("mongoose")

const LoginSchema = mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
}, { timestamps: true })

module.exports = mongoose.model("login", LoginSchema)