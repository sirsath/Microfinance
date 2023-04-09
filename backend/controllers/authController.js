const Login = require("./../model/auth")


exports.LoginDataController = async (req, res) => {
    try {
        const result  =  await Login.create(req.body)
        console.log(req.body);
        res.json({
            message: "Login Data Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
            
        })
    }
} 

exports.getLoginDataController = async (req, res) => {
    try {
        const result  =await Login.find(req.body)
        res.json({
            message: "Login Data get Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}
 
exports.AdminLoginController = async (req, res) => {
    try { 
        const {username , password} = req.body
        const result  =await Login.findOne({username , password})
        if (!result) {
            return res.json({message : "Email & Password Not Found"})
        }  
        res.json({
            message: "Admin Login Successfully",
            result
        })
    } catch (error) {
        res.status(400).json({
            message: "Error" + error,
        })
    }
}

