import "./newCustomer.scss"
import Sidebar from "../../../../components/sidebar/Sidebar"
import Navbar from "../../../../components/navbar/Navbar"
import NewCustomerForm from "./NewCustomerForm"
import { Divider } from "@mui/material"

const NewCustomer = () => {
    return (
        <div className="NewCustomer">
            <Sidebar />
            <div className="NewCustomerContainer">
                <Navbar />
                <h3 className="title">Add New Customer</h3>
                <Divider />
                <NewCustomerForm />
            </div>
        </div>
    )
}

export default NewCustomer