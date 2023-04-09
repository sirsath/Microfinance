import "./product.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { productInputs } from "../../formSource"
import { packageRows, packageColumns } from "../../productList"
import { useState } from "react"

const Product = () => {

    const [packageData, setPackageData] = useState(packageRows);

    return (
        <div className="product">
            <Sidebar />
            <div className="productContainer">
                <Navbar />
                <Datatable
                    title='Packages'
                    inputs={productInputs}
                    rows={packageData}
                    set={setPackageData}
                    columns={packageColumns}
                />
            </div>
        </div>
    )
}

export default Product