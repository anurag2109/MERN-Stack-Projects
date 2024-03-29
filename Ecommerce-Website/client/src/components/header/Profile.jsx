import React, { useState } from 'react';
import { Typography, Menu, MenuItem, makeStyles } from '@material-ui/core'
import { PowerSettingsNew } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    component: {
        marginTop: 40
    },
    logout:{
        marginLeft: 20,
        fontSize: 14
    }
})
const Profile = ({ account, setAccount }) => {
    
    const classes = useStyle();
    
    const [open, setOpen ] = useState(false)

    const handleClose = () =>{
        setOpen(false);
    }

    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }

    const logout = () =>{
        setAccount('');
    }

    return (
        <>
            <Link to='#' onClick={handleClick}><Typography style={{ marginTop: 2, textTransform: 'none' }}>{account}</Typography></Link>
            
            <Menu
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                className={classes.component}
            >
                <MenuItem onClick={() => {handleClose(); logout()}}>
                <PowerSettingsNew fontSize='small' color='primary'/>
                    <Typography className={classes.logout}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile;
