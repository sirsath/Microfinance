const Loan = require("./../model/Loan")


exports.addIntrestController = async (req, res) => {
    try {
        const { amount, intrest, tenure, dateOfLoan, givingDate, tenureType } = req.body

        let interestAmount
        if (tenureType == "months") {
            interestAmount = amount * intrest * tenure / 100 / tenure / 12
        } else {
            interestAmount = amount * intrest * tenure / 100
        }
        const result = await Loan.create({
            ...req.body,
            intrestAmount: interestAmount,
            dateOfLoan: new Date(`${dateOfLoan}`),
            givingDate: new Date(`${givingDate}`),
        })
        res.json({
            message: "Intrest added Successfully",
            result
        })

    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}



exports.getAllLoanIntrestUserList = async (req, res) => {

    try {
        const result = await Loan.find()
        res.json({
            message: "All Intrest fetch Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}

exports.lonainterestDelete = async (req, res) => {

    try {
        const result = await Loan.deleteMany()
        res.json({
            message: "All Intrest Delete Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}

exports.getSingleProduct = async (req, res) => {
    const { userDataID } = req.params
    const result = await Loan.findById(userDataID).select("-employId -createdAt -updatedAt -__v")

         if (!result) {
         return res.status(401).json({
            message: "Invalid User Id , Please check & Provide Valid Id"
         })
    }
    res.json({
        message: `Single User with Fetch success`,
        result
    }) 

}

exports.updateInteloanInfo = async(req , res)=>{
    try {

     console.log(req.body) 
       const {userDataID} = req.params 
       console.log(userDataID);
       const result =  await Loan.findByIdAndUpdate(userDataID ,req.body)
        res.json({
            success : true ,
            message : "User Info Update successfuly",
            result
        })
    } catch (error) {
        res.json({
            success : false ,
            message : `ERROR : ${error}`,
        })

    }

}