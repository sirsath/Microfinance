const customer = require("./../model/Customer")


exports.CustomerRegister = async (req, res) => {
    try {
        const { dateOfapply, dob } = req.body
        await customer.create({
            ...req.body,
            dateOfapply: new Date(`${dateOfapply}`),
            dob: new Date(`${dob}`)
        })
        res.json({
            message: "Customer Register Successfully",
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}


exports.getAllCustomer = async (req, res) => {
    try {
        const result = await customer.find()
        res.json({
            message: "Customer fetch Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}

exports.CustomerDelete = async (req, res) => {

    try {
        const result = await customer.deleteMany()
        res.json({
            message: "All customer Delete Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}