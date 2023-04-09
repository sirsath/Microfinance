import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
        field: 'Title',
        headerName: 'Title',
        type: 'text',
        width: 150,
        editable: true,
    },
    {
        field: 'Email',
        headerName: 'Email',
        type: 'email',
        width: 150,
        editable: true,
    },
    {
        field: 'CustomerType',
        headerName: 'Customer Type',
        type: 'text',
        width: 120,
        editable: true,
    },
    {
        field: 'ScheduleDate',
        headerName: 'Schedule Date',
        type: 'date',
        width: 120,
        editable: true,
    },
    {
        field: 'ScheduleTime',
        headerName: 'Schedule Time',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'SMS',
        headerName: 'SMS',
        type: 'bool',
        width: 50,
        renderCell: (params) => (
            params.row.SMS ? 'Yes' : 'No'),
        editable: true,

    },
    {
        field: 'CampaignSent',
        headerName: 'Campaign Sent',
        type: 'text',
        width: 130,
        renderCell: (params) => (
            params.row.CampaignSent ? 'Yes' : 'No'
        ),
        editable: true,
    },
];

const rows = [
    {
        id: 1,
        ScheduleDate: null,
        Title: 'Himachal Pradesh',
        ScheduleTime: '10:00 AM',
        CustomerType: 'Group',
        Email: 'example@gmail.com',
        SMS: true,
        CampaignSent: false
    },
    {
        id: 2,
        ScheduleDate: null,
        Title: 'Manali',
        ScheduleTime: '11:00 AM',
        CustomerType: 'Couple',
        Email: 'example@gmail.com',
        SMS: false,
        CampaignSent: true
    },
    {
        id: 3,
        ScheduleDate: null,
        Title: null,
        ScheduleTime: null,
        CustomerType: null,
        Email: null,
        SMS: null,
        CampaignSent: null
    },
    {
        id: 4,
        ScheduleDate: null,
        Title: null,
        ScheduleTime: null,
        CustomerType: null,
        Email: null,
        SMS: null,
        CampaignSent: null
    },
    {
        id: 5,
        ScheduleDate: null,
        Title: null,
        ScheduleTime: null,
        CustomerType: null,
        Email: null,
        SMS: null,
        CampaignSent: null
    },
    {
        id: 6,
        ScheduleDate: null,
        Title: null,
        ScheduleTime: null,
        CustomerType: null,
        Email: null,
        SMS: null,
        CampaignSent: null
    },
    {
        id: 7,
        ScheduleDate: null,
        Title: null,
        ScheduleTime: null,
        CustomerType: null,
        Email: null,
        SMS: null,
        CampaignSent: null
    },
    {
        id: 8,
        ScheduleDate: null,
        Title: null,
        ScheduleTime: null,
        CustomerType: null,
        Email: null,
        SMS: null,
        CampaignSent: null
    },
    {
        id: 9,
        ScheduleDate: null,
        Title: null,
        ScheduleTime: null,
        CustomerType: null,
        Email: null,
        SMS: null,
        CampaignSent: null
    },
];

export default function PromotionsTable() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <h3
                style={{
                    margin: '20px',
                    fontSize: '1.5rem',
                    color: '#500',
                    fontWeight: '800'
                }}
            >
                Email Campaign
            </h3>
            <Divider sx={{ margin: '10px 0' }} />
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
            />
        </Box >
    );
}