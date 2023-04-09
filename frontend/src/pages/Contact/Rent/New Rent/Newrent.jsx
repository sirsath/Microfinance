import "./newVendor.scss"
import Sidebar from "../../../../components/sidebar/Sidebar"
import Navbar from "../../../../components/navbar/Navbar"
import NewVendorForm from "./NewRentForm"
import { Divider } from "@mui/material"
import NewRentForm from "./NewRentForm"

const Newrent = () => {
    return (
        <div className="Newrent">
            <Sidebar />
            <div className="NewrentContainer">
                <Navbar />
                <h3 className="title">Home-Rent For Customer</h3>
                <Divider />
                {/* <NewVendorForm /> */}
                <NewRentForm/>
            
            </div>
        </div>
    )
}

export default Newrent