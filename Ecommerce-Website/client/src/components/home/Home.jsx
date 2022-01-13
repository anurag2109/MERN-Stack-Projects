import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

// components
import Navbar from './Navbar';
import Banner from './Banner';



const useStyle = makeStyles({
    banner:{
        padding: 10
    }
})
const Home = () => {
    const classes = useStyle();

    return (
        <div>
            <Navbar/>
            <Box className={classes.banner}>
                <Banner/>
            </Box>
        </div>
    )
}

export default Home
