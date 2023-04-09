const { addRentController, getallRentDataController, DeleteRentDataController, getSingleHomeRentDetails } = require("../controllers/RentController")

const router = require("express").Router()

router  
.get("/" ,getallRentDataController )
.get("/:rentDataID" ,getSingleHomeRentDetails )
.post("/addHomerent" ,addRentController )
.delete("/delete" ,DeleteRentDataController )
 

module.exports = router 
