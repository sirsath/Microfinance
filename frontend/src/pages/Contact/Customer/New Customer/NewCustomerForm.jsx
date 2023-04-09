import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomerRegistrationAction } from "../../../../A_Redux/Customer/CustomerAction";

export default function NewCustomerForm() {
    const dispatch =  useDispatch()
  const [CustomerData, setCustomerData] = useState({
    name: "shubham",
    contact: "7028282788",
    dob: "",
    email: "sirsa@gmail.com",
    city: "Aurangabad",
    state: "MH",
    address: "Aurangabad",
    loanAmount: "789",
    dateOfapply: "",
  }) 
  const [clearData , setclearData] = useState({
    name: "",
    contact: "",
    email: "",
    city: "",
    state: "",
    address: "",
    loanAmount: "",
  }) 

  const handelClearData = () => {
    setCustomerData(clearData)
  }


 const handelAddCustomerData = ()=>{
    dispatch(CustomerRegistrationAction(CustomerData))
 }
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          value={CustomerData.name}
          onChange={e=> setCustomerData({...CustomerData , name : e.target.value})}
          label="Customer-Name"
          type="text"
        />

        <TextField
          required
          id="outlined-number"
          value={CustomerData.contact}
          onChange={e=> setCustomerData({...CustomerData , contact : e.target.value})}
          label="Contact"
          type="number"
        />

        <TextField
          id="outlined-Birthdate"
          value={CustomerData.dob}
          onChange={e=> setCustomerData({...CustomerData , dob : e.target.value})}
          label="Birth Date"
          InputLabelProps={{
            shrink: true,
          }}
          type="date"
        />

        <TextField 
        id="outlined-email" 
        value={CustomerData.email}
        onChange={e=> setCustomerData({...CustomerData , email : e.target.value})}
        label="Email ID" type="email" />

        {/* <TextField
          id="outlined-email"
          label="Alternate Email ID"
          type="email"
        /> */}

        <TextField 
         value={CustomerData.city}
         onChange={e=> setCustomerData({...CustomerData , city : e.target.value})}
         id="outlined-city" label="City" type="text" />


        <TextField 
         value={CustomerData.state}
         onChange={e=> setCustomerData({...CustomerData , state : e.target.value})}
        id="outlined-state" label="State" type="text" />

        <TextField
          sx={{ minWidth: "70%" }}
          value={CustomerData.address}
          onChange={e=> setCustomerData({...CustomerData , address : e.target.value})}
          id="outlined-address"
          label="Address"
          type="text"
        />

        <br />

        <Box>
          <TextField 
           value={CustomerData.loanAmount}
           onChange={e=> setCustomerData({...CustomerData , loanAmount : e.target.value})}
          id="outlined-Title" label="Loan Amount" type="text" />

          <TextField
           value={CustomerData.dateOfapply}
           onChange={e=> setCustomerData({...CustomerData , dateOfapply : e.target.value})}
            id="outlined-Applydate"
            label="Apply date"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
          />
        </Box>
        <br />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={handelAddCustomerData} sx={{ marginRight: 5 }} variant="contained">
            Add
          </Button>
          <Button onClick={handelClearData} variant="contained" color="error">
            Clear
          </Button>
        </Box>
      </div>
    </Box>
  );
}
