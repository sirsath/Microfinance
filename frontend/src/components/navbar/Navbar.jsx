import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect, useState } from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from '@mui/material/Button';
import { logout, logoutAction } from "../../A_Redux/Auth/AuthSlice";


const Navbar = () => {
 const dispatchAction =  useDispatch()
  const { dispatch } = useContext(DarkModeContext)
  const [Toggele, setToggele] = useState({})
  const {AdminLogin } = useSelector(state => state.allauth)
  
  
  //profile menu
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
   

  const handLogOut =() => {
    dispatchAction(logoutAction())
  }
  useEffect(() => {
    
   }, [Toggele])
   
 
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <Link to='/'>
          <span className="title">Muleys Finnace</span>
        </Link>

        <div className="items">
          <Tooltip title="Profile settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: -1 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                <div className="profile_item">
                  Admin Name
                  <ExitToAppIcon/>
                </div>
              </Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}

            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} >
             
             
            <MenuItem>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            {
               AdminLogin 

               ? <Link to='/login'>
                 <MenuItem  onClick={handLogOut} >
                 <ListItemIcon>
                   <Logout fontSize="small" />
                 </ListItemIcon>
                 Logout
                </MenuItem> 
                </Link>
               :  <Link to='/login'>
                  <MenuItem >
                  <ListItemIcon>
                   <Logout fontSize="small" />
                 </ListItemIcon>
                 Login
               </MenuItem> 
             </Link>
            }
            
          </Menu>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
