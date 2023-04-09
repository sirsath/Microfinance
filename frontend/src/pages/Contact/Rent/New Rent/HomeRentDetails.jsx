import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getsingleHomeRentData } from "../../../../A_Redux/Rent/RentAction";
import { useParams } from "react-router-dom";
import { Button, Card, Divider, Grid, TextField, Box } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

export default function HomeRentDetails() {
  const { singleData } = useSelector((state) => state.allHomeRent);
  const [UpdateData, setUpdateData] = React.useState(singleData);

  const { id } = useParams();

  const dispatch = useDispatch();
  console.log(singleData);
  React.useEffect(() => {
    dispatch(getsingleHomeRentData(id));
  }, [])

  return ( 
    <>
      {singleData && (
        <Grid container spacing={3}>
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
                Update home rent Information
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
                    Home Rent
                  </h3>
                  <br />

                  <br />
                  <Box>
                    <TextField
                      value={UpdateData.deposite}
                      // onChange={(e) =>
                      //   setUpdateData({
                      //     ...UpdateData,
                      //     deposite: e.target.value,
                      //   })
                      // }
                      required
                      id="outlined"
                      label=" Deposite Amount"
                      type="text"
                    />
                    <TextField
                      id="outlined-date"
                      label="Date"
                      value={UpdateData.dateOfLoan}
                      onChange={(e) =>
                        setUpdateData({
                          ...UpdateData,
                          dateOfLoan: e.target.value,
                        })
                      }
                      InputLabelProps={{
                        shrink: true,
                      }}
                      type="date"
                    />
                    <TextField
                      value={UpdateData.rent}
                      onChange={(e) =>
                        setUpdateData({
                          ...UpdateData,
                          rent: e.target.value,
                        })
                      }
                      id="outlined-interest"
                      label="Rent"
                      type="number"
                    />

                    <TextField
                      id="outlined-interestamt"
                      label="Total Balnce"
                       value={UpdateData.balance}
                      type="number"
                    />
                    <TextField
                      id="outlined-interestamt"
                      label="Pending Balnce"
                      value={UpdateData.PendingAmt}
                      onChange={(e) =>
                        setUpdateData({
                          ...UpdateData,
                          PendingAmt: e.target.value,
                        })
                      }
                      type="number"
                    />

                    <br />

                    {/* <TextField
                    id="outlined-givingdate"
                    value={UpdateData.givingDate}
                    onChange={e=> setUpdateData({...UpdateData , givingDate : e.target.value})}
                    label="Giving-Date"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    type="date"
                  /> */}

                    {/* <TextField
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
                  /> */}

                    {/* <TextField
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
                  /> */}
                  </Box>

                  <br />
                  <br />

                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button sx={{ marginRight: 5 }} variant="contained">
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
      )}
    </>
  );
}
