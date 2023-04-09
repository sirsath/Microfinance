const express = require("express")
const app = express()
const cors = require("cors")
const connectDB = require("./config/db")
require("dotenv").config({ path: "./.env" })
connectDB()

app.use(express.json())
app.use(cors())

app.use("/customer", require("./routes/CustomerRoutes"))
app.use("/login", require("./routes/authRoutes"))
app.use("/loan", require("./routes/LoanRoutes"))
app.use("/rent", require("./routes/RentRoutes"))


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running http://localhost:${PORT}`)) 

  