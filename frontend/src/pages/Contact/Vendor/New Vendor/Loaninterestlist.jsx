import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getInterestDataAction } from "../../../../A_Redux/interest/InterestAction";
import {
  Button,
  ButtonBase,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, Select } from "@material-ui/core";
import { format } from "date-fns"


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 35,
  p: 11,
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Loaninterestlist() {
const navigate =  useNavigate()
  const [open, setOpen] = React.useState(false);

  const { interestData } = useSelector((state) => state.allinterest);
  console.log(interestData);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getInterestDataAction());
  }, [])

 const hanelEdit = ()=>{
  navigate("UpdateInterestForm/:id")
 }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First-Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Contact</TableCell>
              {/* <TableCell align="right">Email-ID</TableCell> */}
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Amount</TableCell>
              <TableCell align="right">Interest</TableCell>
              <TableCell align="right">Interest Amt</TableCell>
              <TableCell align="right">Giving Date</TableCell>
              <TableCell align="right">Monthly Interest</TableCell>
              <TableCell align="right">Pending Amt</TableCell>
              <TableCell align="right">Tenure</TableCell>
              <TableCell align="right">View</TableCell>
              <TableCell align="right">EDIT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {interestData.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}{" "}
                </TableCell>
                <TableCell align="right">{row.lastname}</TableCell>
                <TableCell align="right">{row.contact}</TableCell>
                {/* <TableCell align="right">{row.email}</TableCell> */}
                <TableCell align="right">{row.address}</TableCell>
                {/* <TableCell align="right">{row.dateOfLoan}</TableCell> */}

                <TableCell align="right">{format(new Date(row.dateOfLoan),'dd/MMMM/yyyy')}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.intrest}</TableCell>
                <TableCell align="right">{row.intrestAmount}</TableCell>
                <TableCell align="right">{format(new Date(row.givingDate),'dd/MMMM/yyyy')}</TableCell>
                <TableCell align="right">{row.intrestMonthly}</TableCell>
                <TableCell align="right">{row.pendingAmount}</TableCell>
                <TableCell align="right">{row.tenure}</TableCell>
                <TableCell align="right">
                  <Link to={`/CustomerDetails/${row._id}`}>
                    <Button onClick={(e) => console.log(row._id)}>View</Button>
                  </Link>
                </TableCell>
                <TableCell align="right">
                <Link to={`/UpdateInterestForm/${row._id}`}>
                    <Button onClick={(e) => console.log(row)}>EDIT</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))} 
          </TableBody>
        </Table>
      </TableContainer>

    
    </>
  );
}
