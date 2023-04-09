import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      tour: "Himachal Pradesh",
      customer: "Tirthesh",
      date: "1 March",
      amount: 10000,
      method: "Cash",
      status: "Approved",
    },
    {
      id: 2235235,
      tour: "Manali",
      customer: "Sameer",
      date: "1 March",
      amount: 9000,
      method: "Online",
      status: "Pending",
    },
    {
      id: 2342353,
      tour: "Bhandardara",
      customer: "Milind",
      date: "1 March",
      amount: 5000,
      method: "Cash",
      status: "Pending",
    },
    {
      id: 2357741,
      tour: "Agra",
      customer: "Rohan",
      date: "1 March",
      amount: 9200,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      tour: "Goa",
      customer: "HMT",
      date: "1 March",
      amount: 20000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Lead ID</TableCell>
            <TableCell className="tableCell">Tour</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            {/* <TableCell className="tableCell">Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.tour}</TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                {/* <span className={`status ${row.status}`}>{row.status}</span> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
