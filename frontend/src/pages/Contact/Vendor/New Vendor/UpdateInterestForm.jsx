import {
  Box,
  Button,
  Card,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleDetailsDataAction, UpdateSingleDetailsDataAction } from "../../../../A_Redux/interest/InterestAction";

export default function UpdateInterestForm() {
   const { singleUserDetails } = useSelector((state) => state.allinterest);
 const [UpdateData, setUpdateData] = useState(singleUserDetails)
 const [totalAmount, setTotalAmount] = useState(0)
  console.log(totalAmount , "totalAmount")
   console.log(UpdateData , "UpdateData")
   const dispatch = useDispatch();
   const { id } = useParams();
 
   React.useEffect(() => {
     dispatch(getSingleDetailsDataAction(id)) 
   }, []) 

   const handelUpdate =()=>{
    dispatch(UpdateSingleDetailsDataAction(UpdateData))
   }

   const handleInterestAmount = (e) =>{
    setUpdateData({...UpdateData,tenureType:e.target.value})
    if(e.target.value == "months"){
      setTotalAmount(UpdateData.amount * UpdateData.intrest * UpdateData.tenure / 100 / UpdateData.tenure / 12)
    }else{
      setTotalAmount(UpdateData.amount * UpdateData.intrest * UpdateData.tenure / 100)
    }
  }
  return (
    <>
       {
        UpdateData && <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275, marginTop: 5 }}>
            <h1
              style={{
                margin: 5,
                backgroundColor: "chocolate",

                textAlign: "center",
              }}
            >
              Update Customer Information
            </h1>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "20ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="First Name"
                  type="text"
                    value={UpdateData.name}
                    onChange={(e) =>
                      setUpdateData({ ...UpdateData, name: e.target.value })
                    }
                />

                <TextField
                  required
                    value={UpdateData.lastname}
                    onChange={(e) =>
                      setUpdateData({
                        ...UpdateData,
                        lastname: e.target.value,
                      })
                    }
                  id="outlined-required"
                  label="Last Name"
                  type="text"
                />

                <TextField
                  required
                    value={UpdateData.contact}
                    onChange={(e) =>
                      setUpdateData({
                        ...UpdateData,
                        contact: e.target.value,
                      })
                    }
                  id="outlined-number"
                  label="Contact"
                  type="number"
                />

                <TextField
                    value={UpdateData.email}
                    onChange={(e) =>
                      setUpdateData({ ...UpdateData, email: e.target.value })
                    }
                  id="outlined-email"
                  label="Email ID"
                  type="email"
                />

                <TextField
                    value={UpdateData.address}
                    onChange={(e) =>
                      setUpdateData({
                        ...UpdateData,
                        address: e.target.value,
                      })
                    }
                  id="outlined-address"
                  label="Address"
                  type="text"
                />

                <br />
                <Divider />
                <br />
                <h3
                  style={{
                    textAlign: "center",
                    backgroundColor: "coral",
                  }}
                >
                  Loan Interest
                </h3>
                <br />

                <br />
                <Box>
                  <TextField
                    id="outlined-date"
                    label="Date"
                      value={UpdateData.dateOfLoan}
                    onChange={e=> setUpdateData({...UpdateData ,  dateOfLoan: e.target.value})}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type="date"
                  />

                  <TextField
                    value={UpdateData.amount}
                    onChange={(e) =>
                      setUpdateData({
                        ...UpdateData,
                        amount: e.target.value,
                      })
                    }
                    required
                    id="outlined"
                    label="Amount"
                    type="text"
                  />

                  <TextField
                    value={UpdateData.intrest}
                    onChange={(e) =>
                      setUpdateData({
                        ...UpdateData,
                        intrest: e.target.value,
                      })
                    }
                    id="outlined-interest"
                    label="Interest"
                    type="number"
                  />

                  <TextField
                    value={totalAmount}
                    id="outlined-interestamt"
                    label="Interest-Amount"
                    type="number"
                  />

                  <br />
                  
                  <TextField
                    id="outlined-givingdate"
                    value={UpdateData.givingDate}
                    onChange={e=> setUpdateData({...UpdateData , givingDate : e.target.value})}
                    label="Giving-Date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type="date"
                  />

                  <TextField
                    id="outlined-monthlyinterest"
                    value={UpdateData.intrestMonthly}
                    onChange={(e) =>
                      setUpdateData({
                        ...UpdateData,
                        intrestMonthly: e.target.value,
                      })
                    }
                    label="Monthly-Interest"
                    type="number"
                  />

                  <TextField
                    id="outlined-pending"
                    label="Pending-Amount"
                    value={UpdateData.pendingAmount}
                    onChange={(e) =>
                      setUpdateData({
                        ...UpdateData,
                        pendingAmount: e.target.value,
                      })
                    }
                    type="number"
                  />

                  <TextField
                    id="outlined-tenure"
                    value={UpdateData.tenure}
                    onChange={(e) =>
                      setUpdateData({
                        ...UpdateData,
                        tenure: e.target.value,
                      })
                    }
                    label="Tenure"
                    type="text"
                  />

                  <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                    <InputLabel id="demo-select-small">Year</InputLabel>
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      label="Duration"
                      onChange={(e)=>handleInterestAmount(e)}
                    >
                      <MenuItem value={"year"}>Year</MenuItem>
                      <MenuItem value={"months"}>Month</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <br />
                <br />

                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    // onClick={handeladdInterestData}
                    sx={{ marginRight: 5 }}
                    variant="contained"
                    onClick={handelUpdate}
                  >
                    Update
                  </Button>
                  <Button variant="contained" color="error">
                    Clear
                  </Button>
                </Box>
              </div>
            </Box>
          </Card>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
       }
    </>
  );
}
