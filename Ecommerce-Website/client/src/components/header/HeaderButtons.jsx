import React from 'react'
import { Box, Button, Badge, makeStyles, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons'

const useStyle = makeStyles({
    headerBtnContainer:{
        display: 'flex',
        alignItems: 'center',
        margin: '0 7% 0 auto',
        '& > *':{
            marginRight: 50
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

    return (
        <Box className={classes.headerBtnContainer}>
            <Button variant='contained' className={classes.loginBtn}>Login</Button>
            <Typography>More</Typography>
            <Box className={classes.cartBox}>
                <Badge badgeContent={2} color='secondary'>
                    <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft: 5}}>Cart</Typography>
            </Box>
        </Box>
    )
}

export default HeaderButtons
