import React from 'react'
import { Box, Button, Badge, makeStyles, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

// components
import LoginDialog from '../login/Login';
import { useState } from 'react';
import { useContext } from 'react';
import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';


const useStyle = makeStyles({
    headerBtnContainer:{
        display: 'flex',
        alignItems: 'center',
        margin: '0 7% 0 auto',
        '& > *':{
            marginRight: 50,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#FFFFFF',
        }
    },
    loginBtn:{
        background: 'white',
        color: '#2874F0',
        textTransform: 'none',
        fontSize: 13,
        fontWeight: 600,
        padding: '5px 35px'
    },
    cartBox:{
        display: 'flex'
    }
})
const HeaderButtons = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const { cartItems } = useSelector(state => state.cart);

    const handleClickOpen = () =>{
        setOpen(true);
    };

    return (
        <Box className={classes.headerBtnContainer}>
            {
                account ? <Profile account={account} setAccount={setAccount}  /> :
                <Link to='/'>
                    <Button variant='contained' onClick={handleClickOpen} className={classes.loginBtn}>Login</Button>
                </Link>
            }
            <Typography>More</Typography>
            <Link to='/cart'className={classes.cartBox}>
                <Badge badgeContent={cartItems.length} color='secondary'>
                    <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft: 5}}>Cart</Typography>
            </Link>
            <LoginDialog open = {open} setOpen={setOpen} setAccount={setAccount} />
        </Box>
    )
}

export default HeaderButtons
