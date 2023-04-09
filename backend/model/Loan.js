const mongoose = require("mongoose")

const Loanschema = mongoose.Schema({
    name: {
        type: String,
    },
    lastname: {
        type: String,
    },
    contact: {
        type: String
    },
    email: {
        type: String
    },
    address: {
        type: String
    },
    dateOfLoan: {
        type: Date
    },
    amount: {
        type: String,
    },
    intrest: {
        type: String,
    },
    intrestAmount: {
        type: String,
    },
    givingDate: {
        type: Date,
    },
    intrestMonthly: {
        type: String
    },
    pendingAmount: {
        type: Number
    },
    tenure: {
        type: String
    }
}, { timestamps: true })

module.exports = mongoose.model("Loan", Loanschema)