const mongoose = require("mongoose")

const Rentschema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    contact: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    deposite: {
        type: Number,
    },
    dateOfdeposite: {
        type: Date
    },
    rent: {
        type: Number,
    },
    dateOfrent: {
        type: Date
    },
    balance: {
        type: String,
    },
    month: {
        type: String,
    },
    totalBalnce: {
        type: Number,
    },
    PendingAmt: {
        type: Number,
    },
    payment: {
        type: ["cash" , "online" , "card"],
    }
}, { timestamps: true })

module.exports = mongoose.model("Rent", Rentschema)