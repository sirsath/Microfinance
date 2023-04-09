import React, { useEffect, useState } from "react";
import "./login.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AdminLoginAction } from "../../A_Redux/Auth/AuthAction";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: '30px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    margin: theme.spacing(5)
  }
}));

export default function Login() {  
  const navigate = useNavigate()
 const {AdminLogin} = useSelector(state => state.allauth)
 console.log(AdminLogin);
const dispatch =  useDispatch()

const [AdminLoginData, setAdminLoginData] = useState({
  username : "sai",
  password :  "123"
})
// useEffect((AdminLogin) => {

// }, [AdminLogin])

const classes = useStyles();

 

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(AdminLoginAction(AdminLoginData))
       if (AdminLogin) {
        navigate("/")
       }
  };

  return (
    
    <div className="login">
      {/* <h3>{JSON.stringify(AdminLogin)}</h3> */}
      <div className="titles">
        <Typography
          variant="h3"
          
          component="h6"
          className="title"
        >
          Soft-App
        </Typography>
        <Typography
          variant="h3"
          component="h6"
          className="login_title"
        >
          LOGIN
        </Typography>
      </div>

      <div className={classes.paper}>
        <Paper elevation={10} sx={{ width: "500px", height: '250px', p: "15px" }}>
          <form className={classes.container} onSubmit={handleSubmit}>
            <TextField
            value={AdminLoginData.username}
            onChange={e=> setAdminLoginData({...AdminLoginData , username : e.target.value})}
              id="username"
              label="Username"
              className={classes.textField}
              margin="normal"
            />
            <>
              <TextField
              value={AdminLoginData.password}
              onChange={e=> setAdminLoginData({...AdminLoginData , password : e.target.value})}
                id="password"
                label="Password"
                type="password"
                className={classes.textField}
                margin="normal"
              />
             
            </>
            {/* <Link to="/"> */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              
              >
              Login
            </Button>
              {/* </Link> */}
          </form>
        </Paper>
      </div>
    </div >
  );
}
