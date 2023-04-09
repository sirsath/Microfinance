import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Chip,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select, Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddInterestAction } from "../../../../A_Redux/interest/InterestAction";

export default function NewCustomerForm() {
  const dispatch = useDispatch();
const [tenureType, settenureType] = useState("")
const [totalAmount, setTotalAmount] = useState(0)
  const [UserInterestData, setUserInterestData] = useState({
    name: "sir",
    lastname: "bb",
    contact: "8888",
    email: "ddfgh@gmail.com",
    address: "aurangabad",
    dateOfLoan: "",
    amount: "",
    intrest: "",
    intrestAmount: "",
    givingDate: "",
    intrestMonthly: "",
    pendingAmount: "",
    tenure: "",
    tenureType:""
  });

  const handeladdInterestData = () => {
    dispatch(AddInterestAction(UserInterestData));
  };

  const handleInterestAmount = (e) =>{
    setUserInterestData({...UserInterestData,tenureType:e.target.value})
    if(e.target.value == "months"){
      setTotalAmount(UserInterestData.amount * UserInterestData.intrest * UserInterestData.tenure / 100 / UserInterestData.tenure / 12)
    }else{
      setTotalAmount(UserInterestData.amount * UserInterestData.intrest * UserInterestData.tenure / 100)
    }
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
          label="First Name"
          type="text"
          value={UserInterestData.name}
          onChange={(e) =>
            setUserInterestData({ ...UserInterestData, name: e.target.value })
          }
        />

        <TextField
          required
          value={UserInterestData.lastname}
          onChange={(e) =>
            setUserInterestData({
              ...UserInterestData,
              lastname: e.target.value,
            })
          }
          id="outlined-required"
          label="Last Name"
          type="text"
        />

        <TextField
          required
          value={UserInterestData.contact}
          onChange={(e) =>
            setUserInterestData({
              ...UserInterestData,
              contact: e.target.value,
            })
          }
          id="outlined-number"
          label="Contact"
          type="number"
        />

        <TextField
          value={UserInterestData.email}
          onChange={(e) =>
            setUserInterestData({ ...UserInterestData, email: e.target.value })
          }
          id="outlined-email"
          label="Email ID"
          type="email"
        />

      

        <TextField
          value={UserInterestData.address}
          onChange={(e) =>
            setUserInterestData({
              ...UserInterestData,
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
            marginTop: 5,
            marginLeft: 10,
            textAlign: "center",
            padding: "10px",
            color: "black",
            backgroundColor: "gray",
            width: "80vw",
            borderRadius: "8px",
          }}
        >
          Loan-Interest
        </h3>
        <br />

        <br />
        <Box>
          <TextField
            id="outlined-date"
            label="Date"
              value={UserInterestData.dateOfLoan}
            onChange={e=> setUserInterestData({...UserInterestData ,  dateOfLoan: e.target.value})}
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
          />

          <TextField
            value={UserInterestData.amount}
            onChange={(e) =>
              setUserInterestData({
                ...UserInterestData,
                amount: e.target.value,
              })
            }
            required
            id="outlined"
            label="Amount"
            type="text"
          />

          <TextField
            value={UserInterestData.intrest}
            onChange={(e) =>
              setUserInterestData({
                ...UserInterestData,
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
            value={UserInterestData.givingDate}
            onChange={e=> setUserInterestData({...UserInterestData , givingDate : e.target.value})}
            label="Giving-Date"
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
          />

          <TextField
            id="outlined-monthlyinterest"
            value={UserInterestData.intrestMonthly}
            onChange={(e) =>
              setUserInterestData({
                ...UserInterestData,
                intrestMonthly: e.target.value,
              })
            }
            label="Monthly-Interest"
            type="number"
          />

          {/* <TextField
            id="outlined-pending"
            label="Pending-Amount"
            value={UserInterestData.pendingAmount}
            onChange={(e) =>
              setUserInterestData({
                ...UserInterestData,
                pendingAmount: e.target.value,
              })
            }
            type="number"
          /> */}

          <TextField
            id="outlined-tenure"
            value={UserInterestData.tenure}
            onChange={(e) =>
              setUserInterestData({
                ...UserInterestData,
                tenure: e.target.value,
              })
            }
            label="Tenure"
            type="text"
          />

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Year</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" label="Duration" onChange={(e)=>handleInterestAmount(e)}>
              <MenuItem  value={"year"}>Year</MenuItem>
              <MenuItem value={"months"}>Month</MenuItem>
            </Select>
          </FormControl>


        </Box>

        <br />
        <br />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handeladdInterestData}
            sx={{ marginRight: 5 }}
            variant="contained"
          >
            Add
          </Button>
          <Button variant="contained" color="error">
            Clear
          </Button>
        </Box>
      </div>
    </Box>
  );
}
