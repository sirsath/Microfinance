import React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PlusOneIcon from '@mui/icons-material/PlusOne';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { Link } from 'react-router-dom';

const actions = [
    { icon: <Link to='/leads/newLead'><PlusOneIcon /></Link>, name: 'Add New Lead' },
    { icon: <Link to='/contact/customer/newCustomer'> <PersonAddIcon /> </Link>, name: 'Add New Customer' },
    { icon: <Link to='/users/new'><SupportAgentIcon /></Link>, name: 'Create New User' },
    { icon: <Link to='/users/new'><ThumbUpAltIcon /></Link>, name: 'Add Vendor' },
];

export default function BasicSpeedDial() {
    return (
        <Box sx={{ height: 120, transform: 'translateZ(0px)', flexGrow: 1 }}>
            <SpeedDial
                ariaLabel="SpeedDial"
                sx={{ position: 'fixed', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}