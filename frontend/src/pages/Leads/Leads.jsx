import './leads.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import CustomerList from '../Contact/Customer/New Customer/CustomerList';

export default function Leads() {


    const columns = [
        { field: 'id', headerName: 'Lead ID', width: 80 },
        { field: 'contactName', headerName: 'Contact Name', width: 100 },
        {
            field: 'phone',
            headerName: 'Phone No',
            type: 'num',
            width: 110,
        },

        { field: 'assignedTo', headerName: 'Assigned To', width: 100 },
        { field: 'leadSource', headerName: 'Lead Source', width: 130 },
        { field: 'leadStatus', headerName: 'Lead Status', width: 100 },
        { field: 'destination', headerName: 'Destination', width: 100 },
        { field: 'enquiryType', headerName: 'Enquiry Type', width: 100 },
        { field: 'tripType', headerName: 'Trip Type', width: 80 },
        { field: 'tags', headerName: 'Tags', width: 70 },
        { field: 'tourStart', headerName: 'Tour Start', width: 100 },
        { field: 'createdDate', headerName: 'Created Date', width: 100 }
    ];

    const rows = [
        {
            id: 324212,
            assignedTo: 'Snow',
            contactName: 'Jon',
            phone: 8791564635,
            leadSource: 'New customer',
            leadStatus: 'Booked',
            destination: 'Himachal',
            enquiryType: 'Adventure',
            tripType: 'Other',
            tags: 'Group',
            createdDate: 'render date',
            tourStart: '31/12/22'
        },
        {
            id: 223422,
            assignedTo: 'Snow',
            contactName: 'Jon',
            phone: 879564635,
            leadSource: 'New customer',
            leadStatus: 'Booked',
            destination: 'Himachal',
            enquiryType: 'Adventure',
            tripType: 'Other',
            tags: 'Group',
            createdDate: 'render date',
            tourStart: '31/12/22'
        },
        {
            id: 234232,
            assignedTo: 'Snow',
            contactName: 'Jon',
            phone: 8795641635,
            leadSource: 'New customer',
            leadStatus: 'Pending',
            destination: 'Himachal',
            enquiryType: 'Adventure',
            tripType: 'Other',
            tags: 'Group',
            createdDate: 'render date',
            tourStart: '31/12/22'
        },
        {
            id: 243324,
            assignedTo: 'Snow',
            contactName: 'Jon',
            phone: 8795614635,
            leadSource: 'New customer',
            leadStatus: 'Booked',
            destination: 'Himachal',
            enquiryType: 'Adventure',
            tripType: 'Other',
            tags: 'Family',
            createdDate: 'render date',
            tourStart: '31/12/22'
        },
        {
            id: 234225,
            assignedTo: 'Snow',
            contactName: 'Jon',
            phone: null,
            leadSource: 'New customer',
            leadStatus: 'Booked',
            destination: 'Himachal',
            enquiryType: 'Adventure',
            tripType: 'Other',
            tags: 'Group',
            createdDate: 'render date',
            tourStart: '31/12/22'
        },
        {
            id: 234246,
            assignedTo: 'Snow',
            contactName: 'Jon',
            phone: 8795641635,
            leadSource: 'New customer',
            leadStatus: 'Negotiating',
            destination: 'Himachal',
            enquiryType: 'Adventure',
            tripType: 'Other',
            tags: 'Couple',
            createdDate: 'render date',
            tourStart: '31/12/22'
        },
        {
            id: 243237,
            assignedTo: 'Snow',
            contactName: 'Jon',
            phone: 8795614635,
            leadSource: 'New customer',
            leadStatus: 'Booked',
            destination: 'Himachal',
            enquiryType: 'Adventure',
            tripType: 'Other',
            tags: 'Group',
            createdDate: 'render date',
            tourStart: '31/12/22'
        },
        {
            id: 234328,
            assignedTo: 'Snow',
            contactName: 'Jon',
            phone: 8795614635,
            leadSource: 'New customer',
            leadStatus: 'Pending',
            destination: 'Himachal',
            enquiryType: 'Adventure',
            tripType: 'Other',
            tags: 'Group',
            createdDate: 'render date',
            tourStart: '31/12/22'
        },
        {
            id: 234239,
            assignedTo: 'Snow',
            contactName: 'Jon',
            phone: 8795614635,
            leadSource: 'New customer',
            leadStatus: 'Booked',
            destination: 'Himachal',
            enquiryType: 'Adventure',
            tripType: 'Other',
            tags: 'Group',
            createdDate: 'render date',
            tourStart: '31/12/22'
        },
    ];

    return (
        <div className='leads'>
            <Sidebar />
            <div className='leads_container'>
                <Navbar />
                <h3 className='title'>Leads</h3>
                <Divider sx={{ marginBottom: '10px' }} />
                <div style={{ height: 650, width: '100%' }}>
                    <div className="leadsTableTitle">
                        <Link to="/leads/newLead" className="link">
                            Add New Lead
                        </Link>
                    </div>
                    <CustomerList/>
                    {/* <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                        checkboxSelection
                    /> */}
                </div>
            </div>
        </div>
        
    )
}
