import "./vendor.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import VendorTable from "./VendorTable"

const Vendor = () => {
    return (
        <div className="vendor">
            <Sidebar />
            <div className="vendorContainer">
                <Navbar />
                <VendorTable />
            </div>
        </div>
    )
}

export default Vendor