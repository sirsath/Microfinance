import "./newVendor.scss"
import Sidebar from "../../../../components/sidebar/Sidebar"
import Navbar from "../../../../components/navbar/Navbar"
import NewVendorForm from "./NewVendorForm"
import { Divider } from "@mui/material"

const NewVendor = () => {
    return (
        <div className="NewVendor">
            <Sidebar />
            <div className="NewVendorContainer">
                <Navbar />
                <h3 className="title">Loan Interest For Each Customer</h3>
                <Divider />
                <NewVendorForm />
            </div>
        </div>
    )
}

export default NewVendor