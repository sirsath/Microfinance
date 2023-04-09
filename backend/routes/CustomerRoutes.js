const { CustomerRegister, getAllCustomer, CustomerDelete } = require("../controllers/CustomerControllers")

const router = require("express").Router()

router  
.get("/" , getAllCustomer)
.post("/register" , CustomerRegister)
.delete("/delete" ,CustomerDelete )

 

module.exports = router
