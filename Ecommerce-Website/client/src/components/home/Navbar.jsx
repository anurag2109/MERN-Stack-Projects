import React from 'react';
import { Box, Typography, makeStyles } from '@material-ui/core';

// coponents
import { navBarData } from '../../constants/data.js';

const useStyle = makeStyles({
    navbarContainer:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '55px 130px 0 130px'
    },
    navbarItemBox:{
        textAlign: 'center',
        padding: '12px 8px'
    },
    navbarImage:{
        width: 64
    },
    navbarText:{
        fontSize: 14,
        fontWeight: 600,
        fontFamily: 'inherit'
    }
})
const Navbar = () => {
    const classes = useStyle();

    return (
        <Box className={classes.navbarContainer}>
            {
                navBarData.map((item)=>(
                    <Box className={classes.navbarItemBox}>
                        <img src={item.url} className={classes.navbarImage}/>
                        <Typography className={classes.navbarText}>{item.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default Navbar
