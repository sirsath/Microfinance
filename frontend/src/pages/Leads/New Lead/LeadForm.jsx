import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FormPropsTextFields() {
    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" }
            }}
            noValidate
            autoComplete="off"
        >
            <FormControl sx={{ width: '20ch', m: 1 }}>
                <InputLabel id="demo-simple-select-label">Customer Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Customer Type"
                >
                    <MenuItem value='B2C'>B2C</MenuItem>
                    <MenuItem value='B2B'>B2B</MenuItem>
                    <MenuItem value='Corporate'>Corporate</MenuItem>
                    <MenuItem value='VIP'>VIP</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: '20ch', m: 1 }}>
                <InputLabel id="demo-simple-select-label">Lead Priority</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Lead Priority"
                >
                    <MenuItem value='Cold'>Cold</MenuItem>
                    <MenuItem value='Warm'>Warm</MenuItem>
                    <MenuItem value='Hot'>Hot</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: '20ch', m: 1 }}>
                <InputLabel id="demo-simple-select-label">Lead Status</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Lead Status"
                >
                    <MenuItem value='New'>New</MenuItem>
                    <MenuItem value='Working'>Working</MenuItem>
                    <MenuItem value='Negotiating'>Negotiating</MenuItem>
                    <MenuItem value='Proposal'>Proposal Sent</MenuItem>
                    <MenuItem value='Booked'>Booked</MenuItem>
                    <MenuItem value='Lost'>Lost</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: '20ch', m: 1 }}>
                <InputLabel id="demo-simple-select-label">Lead Source</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Lead Source"
                >
                    <MenuItem value='New Customer'>New Customer</MenuItem>
                    <MenuItem value='Old Customer'>Old Customer</MenuItem>
                    <MenuItem value='Walk-in'>Walk-in</MenuItem>
                    <MenuItem value='Cold Call'>Cold Call</MenuItem>
                    <MenuItem value='Ads'>Ads</MenuItem>
                    <MenuItem value='Employee Referral'>Employee Referral</MenuItem>
                    <MenuItem value='External Referral'>External Referral</MenuItem>
                    <MenuItem value='Website'>Website</MenuItem>
                    <MenuItem value='Other'>Other</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: '20ch', m: 1 }}>
                <InputLabel id="demo-simple-select-label">Trip Type</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Trip Type"
                >
                    <MenuItem value='Adventure'>Adventure</MenuItem>
                    <MenuItem value='Family'>Family</MenuItem>
                    <MenuItem value='Couple'>Couple</MenuItem>
                    <MenuItem value='Honeymoon'>Honeymoon</MenuItem>
                    <MenuItem value='Official'>Official</MenuItem>
                    <MenuItem value='Corporate'>Corporate</MenuItem>
                    <MenuItem value='Group'>Group</MenuItem>
                    <MenuItem value='Individual'>Individual</MenuItem>
                    <MenuItem value='Religious'>Religious</MenuItem>
                    <MenuItem value='Other'>Other</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ width: '20ch', m: 1 }}>
                <InputLabel id="demo-simple-select-label">Assigned to</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Assigned to"
                >
                    <MenuItem value='Tirthesh Bakliwal'>Tirthesh Bakliwal</MenuItem>
                    <MenuItem value='Tirthesh Bakliwal'>Tirthesh Bakliwal</MenuItem>
                    <MenuItem value='Tirthesh Bakliwal'>Tirthesh Bakliwal</MenuItem>
                    <MenuItem value='Tirthesh Bakliwal'>Tirthesh Bakliwal</MenuItem>
                </Select>
            </FormControl>

            <div>

                <TextField
                    required
                    id="outlined-required"
                    label="Firstname"
                    type="text"
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Lastname"
                    type="text"
                />

                <TextField id="outlined-number" label="Contact" type="number" />

                <TextField id="outlined-email" label="Email ID" type="email" />

                <TextField
                    id="outlined-number"
                    label="Alternate Contact"
                    type="number"
                />

                <TextField
                    id="outlined-email"
                    label="Alternate Email ID"
                    type="email"
                />

                <TextField id="outlined-city" label="City" type="text" />

                <TextField required id="number" type="number" label="No. of Children" />
                <TextField required id="number" type="number" label="No. of Adults" />
                <TextField required id="number" type="number" label="No. of Infant" />

                <FormControl sx={{ width: '20ch', m: 1 }}>
                    <InputLabel id="demo-simple-select-label">Tag</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Tag"
                    >
                        <MenuItem value='Adventure'>Adventure</MenuItem>
                        <MenuItem value='Family'>Family</MenuItem>
                        <MenuItem value='Couple'>Couple</MenuItem>
                        <MenuItem value='Honeymoon'>Honeymoon</MenuItem>
                        <MenuItem value='Official'>Official</MenuItem>
                        <MenuItem value='Corporate'>Corporate</MenuItem>
                        <MenuItem value='Group'>Group</MenuItem>
                        <MenuItem value='Individual'>Individual</MenuItem>
                        <MenuItem value='Religious'>Religious</MenuItem>
                        <MenuItem value='Other'>Other</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{ display: 'flex' }}>
                    <h5 style={{ margin: '10px' }}>Enquiry Type:</h5>
                    <FormGroup sx={{ m: 1 }}>
                        <FormControlLabel control={<Checkbox />} label="Flight Booking" />
                        <FormControlLabel control={<Checkbox />} label="Hotel Booking" />
                        <FormControlLabel control={<Checkbox />} label="Visa" />
                        <FormControlLabel control={<Checkbox />} label="Travel Insurance" />
                    </FormGroup>
                    <FormGroup sx={{ m: 1 }}>
                        <FormControlLabel control={<Checkbox />} label="Forex" />
                        <FormControlLabel control={<Checkbox />} label="Sightseeing" />
                        <FormControlLabel control={<Checkbox />} label="Transport" />
                        <FormControlLabel control={<Checkbox />} label="Other" />
                    </FormGroup>
                    <FormGroup sx={{ m: 1 }}>
                        <FormControlLabel control={<Checkbox />} label="Package" />
                        <FormControlLabel control={<Checkbox />} label="Customise Package" />
                        <FormControlLabel control={<Checkbox />} label="Bus" />
                        <FormControlLabel control={<Checkbox />} label="Train" />
                    </FormGroup>
                    <FormGroup sx={{ m: 1 }}>
                        <FormControlLabel control={<Checkbox />} label="Passport" />
                        <FormControlLabel control={<Checkbox />} label="Cruise" />
                        <FormControlLabel control={<Checkbox />} label="Adventure" />
                        <FormControlLabel control={<Checkbox />} label="Group" />
                    </FormGroup>
                </Box>

                <TextField
                    id="outlined-multiline-flexible"
                    label="Notes"
                    multiline
                    minRows={6}
                    sx={{ minWidth: '90%' }}
                />

            </div>
        </Box>
    );
}
