const Rent = require("./../model/Rent")


exports.addRentController = async (req, res) => {
    try {
        const { dateOfdeposite, dateOfrent, deposite, rent } = req.body
        let Toatalamt = Number(rent) + Number(deposite)
        let pendingAmt = Number(rent) 
        const result = await Rent.create({
            ...req.body,
            balance: Toatalamt ,
            PendingAmt : pendingAmt
            // dateOfrent: new Date(`${dateOfrent}`),
            // dateOfdeposite: new Date(`${dateOfdeposite}`),
        })

        res.json({
            message: "Rent added Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}

exports.getallRentDataController = async (req, res) => {
    try {
        const result = await Rent.find()

        res.json({
            message: "Rent Get Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}

exports.DeleteRentDataController = async (req, res) => {
    try {
        const result = await Rent.deleteMany()

        res.json({
            message: "Rent Delete Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}

exports.getSingleHomeRentDetails = async (req, res) => {
    const { rentDataID } = req.params
    const result = await Rent.findById(rentDataID).select("-employId -createdAt -updatedAt -__v")

         if (!result) {
         return res.status(401).json({
            message: "Invalid User Id , Please check & Provide Valid Id"
         })
    }
    res.json({
        message: `Single Home C  Fetch success`,
        result
    }) 

}