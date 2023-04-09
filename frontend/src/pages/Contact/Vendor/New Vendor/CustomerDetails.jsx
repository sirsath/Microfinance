import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleDetailsDataAction } from "../../../../A_Redux/interest/InterestAction";
import { Grid } from "@mui/material";
import { format } from "date-fns";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CustomerDetails() {
  const { singleUserDetails } = useSelector((state) => state.allinterest);

  console.log(singleUserDetails);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id, "iiiiiiddd");

  React.useEffect(() => {
    dispatch(getSingleDetailsDataAction(id));
  }, []);
console.log(typeof ( singleUserDetails.givingDate))
 console.log();
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs></Grid>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275, marginTop: 5 }}>
            <h1
              style={{
                textAlign: "center",
                backgroundColor: "gold",
              }}
            >
              Costomer Information
            </h1>
            <CardContent>
              <Typography sx={{ fontSize: 14 , textAlign : "center" }} color="text.secondary" gutterBottom >
                <h1>Name:- {singleUserDetails.name} {singleUserDetails.lastname} </h1>
                <h3>Email :- {singleUserDetails.email} </h3>
                <h3>Contact:- {singleUserDetails.contact} </h3>
                <h3>Address :- {singleUserDetails.address} </h3>
                <h3>DateOfLoan :-  {format(new Date(singleUserDetails.dateOfLoan), 'dd/MMMM/yyyy')} </h3>
                <h3>Amount :- {singleUserDetails.amount}</h3>
                <h3>Intrest :- {singleUserDetails.intrest}%</h3>
                <h3>IntrestAmount :- {singleUserDetails.intrestAmount}</h3>
                <h3>GivingDate :- {format(new Date(singleUserDetails.givingDate), 'dd/MMMM/yyyy')}</h3>
                <h3>IntrestMonthly :- {singleUserDetails.intrestMonthly}</h3>
                <h3>PendingAmount :- {singleUserDetails.pendingAmount}</h3>
                <h3>Tenure :- {singleUserDetails.tenure}</h3>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </>
  )

  // <td>{format(new Date(item.chooseDateTime), 'dd/MMMM/yyyy')}</td>
}
