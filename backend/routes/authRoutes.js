const {getLoginDataController, LoginDataController, AdminLoginController } = require("../controllers/authController")

const router = require("express").Router()

router  
.get("/" , getLoginDataController)
.post("/register" ,LoginDataController )
.post("/admin" ,AdminLoginController )
  

module.exports = router
