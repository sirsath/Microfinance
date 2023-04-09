import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddhomeRentAction } from "../../../../A_Redux/Rent/RentAction";

export default function NewRentForm() {
  const dispatch = useDispatch();
  const [TotamAmt, setTotamAmt] = useState(0);

  const [HomeRentData, setHomeRentData] = useState({
    name: "Shubham",
    email: "shubham@gmail.com",
    contact: "789456123",
    address: "Aurnagabad",
    city: "Aurangabad",
    state: "MH",
    deposite: 0,
    dateOfdeposite: "",
    rent: 0,
    dateOfrent: "",
    balance: "",
    month: "",
    payment: ["cash", "online", "card"],
  });

  const handelAddHomeRent = () => {
    dispatch(AddhomeRentAction(HomeRentData));
  };

  let XX = +HomeRentData.deposite 
  let yy = +HomeRentData.rent 
  console.log();
  const handelTotalBalance = (e) => {
    setTotamAmt(XX + yy) 
    setHomeRentData({ ...HomeRentData, rent: e.target.value })
  }

  useEffect(() => {}, [TotamAmt])
   console.log(TotamAmt)

  return (
    <Box
      component="form"
      sx={{
        "&.MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          value={HomeRentData.name}
          onChange={(e) =>
            setHomeRentData({ ...HomeRentData, name: e.target.value })
          }
          id="outlined-required"
          label="Full Name"
          type="text"
        />

        <TextField
          value={HomeRentData.email}
          onChange={(e) =>
            setHomeRentData({ ...HomeRentData, email: e.target.value })
          }
          id="outlined-email"
          label="Email ID"
          type="email"
        />

        <TextField
          required
          value={HomeRentData.contact}
          onChange={(e) =>
            setHomeRentData({ ...HomeRentData, contact: e.target.value })
          }
          id="outlined-number"
          label="Contact"
          type="number"
        />

        <TextField
          value={HomeRentData.address}
          onChange={(e) =>
            setHomeRentData({ ...HomeRentData, address: e.target.value })
          }
          id="outlined-address"
          label="Address"
          type="text"
        />

        <TextField
          value={HomeRentData.city}
          onChange={(e) =>
            setHomeRentData({ ...HomeRentData, city: e.target.value })
          }
          id="outlined-city"
          label="City"
          type="text"
        />

        <TextField
          value={HomeRentData.state}
          onChange={(e) =>
            setHomeRentData({ ...HomeRentData, state: e.target.value })
          }
          id="outlined-state"
          label="State"
          type="text"
        />
        <br />
        <h3
          style={{
            marginLeft: 10,
            textAlign: "center",
            padding: "10px",
            color: "black",
            backgroundColor: "gray",
            width: "80vw",
            borderRadius: "8px",
          }}
        >
          Home-Rent
        </h3>
        <br />
        <Box>
          <TextField
            id="outlined-date"
            label="Date Of Deposite"
            value={HomeRentData.dateOfdeposite}
            onChange={(e) =>
              setHomeRentData({
                ...HomeRentData,
                dateOfdeposite: e.target.value,
              })
            }
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
          />

          <TextField
            required
            value={HomeRentData.deposite}
            onChange={(e) =>
              setHomeRentData({ ...HomeRentData, deposite: e.target.value })
            }
            id="outlined"
            label="Deposite-Amount"
            type="number"
          />

          <TextField
            value={HomeRentData.rent}
            onChange={(e) => handelTotalBalance(e)}
            id="outlined-rent"
            label="Rent"
            type="number"
          />

          <TextField
            id="outlined-date"
            label="Date Of Rent"
            value={HomeRentData.dateOfrent}
            onChange={(e) =>
              setHomeRentData({ ...HomeRentData, dateOfrent: e.target.value })
            }
            InputLabelProps={{
              shrink: true,
            }}
            type="date"
          />

          <br />

          {/* <h3>Auto blc = </h3> */}
          {/* <TextField value={TotamAmt} id="outlined-balance" label="Balance" type="number" /> */}

          <TextField
            value={HomeRentData.month}
            onChange={(e) =>
              setHomeRentData({ ...HomeRentData, month: e.target.value })
            }
            id="outlined-month"
            label="Month"
            type="number"
          />

          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="demo-simple-select-label" label="Payment">
              Payment
            </InputLabel>
            <Select
              value={HomeRentData.payment}
              onChange={(e) =>
                setHomeRentData({ ...HomeRentData, payment: e.target.value })
              }
              label="Payment"
              type="dropdown"
            >
              <MenuItem value={"cash"}>Cash</MenuItem>
              <MenuItem value={"online"}>Online</MenuItem>
              <MenuItem value={"card"}>Card</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <br />
        <br />

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handelAddHomeRent}
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
