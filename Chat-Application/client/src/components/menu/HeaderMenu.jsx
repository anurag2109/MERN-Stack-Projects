import React, { useContext, useState } from "react";
import { MoreVert } from "@material-ui/icons";
import { Menu, MenuItem, makeStyles } from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';
import { clientId } from '../../constants/data.js';
import { AccountContext } from '../../context/AccountProvider';

const useStyle = makeStyles({
    menuItem:{
        fonstSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4a4a4a'
    },
    logout:{
        border: 'none!important',
        boxShadow: 'none!important',
        '& > *':{
            padding: '0px!important'
        }
    }
})

const HeaderMenu = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyle();

    const { setAccount } = useContext(AccountContext);

    const handleClose = ()=>{
        setOpen(false);
    }

    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }

    const onLogoutSuccess = () =>{
        alert("You have been logged out successfully !!")
        console.clear();
        setAccount(null);
    }

    return (
    <>
      <MoreVert onClick={handleClick}/>
      <Menu
        anchorEl={open}
        open={open}
        onClose={handleClose}
       getContentAnchorEl={null}
       anchorOrigin={{
           vertical: 'bottom',
           horizontal: 'center'
       }}
       transformOrigin={{
           vertical: 'top',
           horizontal: 'right'
       }}
      >
        <MenuItem onClick={handleClose} className={classes.menuItem}>Profile</MenuItem>
        <MenuItem onClick={handleClose} className={classes.menuItem}>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onLogoutSuccess}
                className={classes.logout}
            >

            </GoogleLogout>
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderMenu;
