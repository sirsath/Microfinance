import "./vendor.scss"
import Sidebar from "../../../components/sidebar/Sidebar"
import Navbar from "../../../components/navbar/Navbar"
import VendorTable from "../Vendor/VendorTable"
import RentTable from "./RentTable"

const Rent = () => {
    return (
        <div className="rent">
            <Sidebar />
            <div className="rentContainer">
                <Navbar />
                <RentTable/>
            </div>
        </div>
    )
}

export default Rent