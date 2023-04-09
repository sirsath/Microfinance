import { Box, Button, Divider } from "@mui/material";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";
import LeadForm from './LeadForm'
import './newLead.scss'

export default function NewLead() {
    return (
        <div className='newLead'>
            <Sidebar />
            <div className='newLeads_container'>
                <Navbar />
                <Box className="head">
                    <h3 className='title'>Add New Lead</h3>
                    <Box>
                        <Button variant="contained" sx={{ marginRight: 5 }}>Add</Button>
                        <Button variant="contained" sx={{ marginRight: 5 }}>Clear</Button>
                    </Box>
                </Box>
                <Divider sx={{ marginBottom: '10px' }} />

                <LeadForm />

            </div>
        </div>
    )
}
