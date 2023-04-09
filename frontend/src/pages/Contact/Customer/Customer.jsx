import "./customer.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
// import CustomerTable from "./CustomerTable"
import CustomerList from "./New Customer/CustomerList"
import CustomerTable from "./CustomerTable"
import { Divider } from "@mui/material"

const Customer = () => {
    return (
        <div className="customer">
            <Sidebar/>
            <div className="customerContainer">
                <Navbar/>
                <Divider />
                <CustomerTable/>
            </div>
        </div>
    )
}

export default Customer