const mongoose = require("mongoose")

const customerSchema = mongoose.Schema({
    name: {
        type: String,
    },
    contact: {
        type: String,
    },
    dob: {
        type: Date
    },
    email: {
        type: String,
    },
    city :{
        type : String
    },
    state: {
        type: String,
    },
    address: {
        type: String,
    },
    loanAmount: {
        type: Number
    },  
    dateOfapply: {
        type: Date
    },
   
}, { timestamps: true })

module.exports = mongoose.model("customer", customerSchema)