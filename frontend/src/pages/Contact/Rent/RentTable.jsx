import "./VendorTable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./SourceTable";
import { Link } from "react-router-dom";
import { useState } from "react";
import Homerentlist from "./New Rent/Homerentlist";
// import Loaninterestlist from "./New Vendor/Loaninterestlist";

const RentTable = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Home-Rent For Customer Details
                <div className="buttons">
                    <Link to="/contact/Rent/Newrent" className="customerButton">
                        Add New
                    </Link>
                </div>
            </div>
            {/* <Loaninterestlist/> */}
           <Homerentlist/>
            {/* <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            /> */}
        </div>
    );
};

export default RentTable;
