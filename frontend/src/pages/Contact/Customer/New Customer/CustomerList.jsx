import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCustomerDataAction } from '../../../../A_Redux/Customer/CustomerAction';
import { format } from "date-fns"


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function CustomerList() { 
    const { CustomerDetails } = useSelector(state => state.allCustomer)
     console.log(CustomerDetails  )
    const dispatch =  useDispatch()

   React.useEffect(() => {
    dispatch(getAllCustomerDataAction())
   }, [])
   

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Full-Name</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Birth-Date</TableCell>
            <TableCell align="right">Email-ID</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Loan-Amount</TableCell>
            <TableCell align="right">Apply-Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { CustomerDetails && CustomerDetails.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{format(new Date(row.dob), 'dd/MMMM/yyyy')}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.loanAmount}</TableCell>
              <TableCell align="right">{format(new Date(row.dateOfapply), 'dd/MMMM/yyyy')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
