import "./sidebar.css";
import sidebarLogo from './hmt_logo.png'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SellIcon from '@mui/icons-material/Sell';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import SpeedDial from "../SpeedDial";
import { Collapse, Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Logout } from "@mui/icons-material";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const {AdminLogin} = useSelector(state => state.allauth)


  const [open, setOpen] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  return (
    <div className="sidebar">
      <div  className="top">
      <span>Muleys Finnace</span>
        <Link to="/">
          <img  style={{height : "10vh" , width : "10vh"}} src="https://e7.pngegg.com/pngimages/117/356/png-clipart-computer-logo-internet-computer-internet-blue-computer-network-thumbnail.png" className='sidebar_logo' alt="HMT Logo" />
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <Link to='/'>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
        
          <List>
            <ListItem onClick={handleClick}>
              <ConnectWithoutContactIcon className="icon" />
              <ListItemText primary='Pages' />
              {/* <KeyboardArrowUpIcon fontSize={'small'} />  */}
               {/* <KeyboardArrowDownIcon fontSize={'small'} /> */}
            </ListItem>
            <List>
                <Divider />
                <List component="div">
                  <Link to='/contact/customer'>
                    <ListItem >
                      <ListItemText primary="Customer" />
                    </ListItem>
                  </Link>
                  <Link to='/contact/Rent'>
                    <ListItem >
                      <ListItemText primary="Home Rent" />
                    </ListItem>
                  </Link>
                  <Link to='/contact/vendor'>
                    <ListItem >
                      <ListItemText primary="Loan Interest" />
                    </ListItem>
                  </Link>
                </List>
            </List>

          </List>

          {/* <p className="title">SERVICE</p>
           <Link to='/login'>
            <li>
              <Logout className="icon" />
              <span>Login</span>
            </li>
          </Link> */}
        </ul>
      </div>
    </div >
  );
};

export default Sidebar;
