const {getAllLoanIntrestUserList, addIntrestController, lonainterestDelete, getSingleProduct, updateInteloanInfo } = require("../controllers/LoanController")

const router = require("express").Router()

router  
.get("/" , getAllLoanIntrestUserList)
.get("/:userDataID" , getSingleProduct)
.post("/addintrest" ,addIntrestController )
.delete("/delete" ,lonainterestDelete )
.put("/update/:userDataID" ,updateInteloanInfo )
 

module.exports = router
 