import React from 'react';
import { AppBar, makeStyles, withStyles, Box, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

// components
import SearchBar from './SearchBar';
import HeaderButtons from './HeaderButtons';

const useStyle = makeStyles({
    header:{
        background: '#2874f0',
        height: 55
    },
    headingContainer:{
        marginLeft: '11%',
        textDecoration: 'none',
        color: 'white'
    },
    flipkartLogo:{
        width: 75
    },
    heading:{
        display: 'flex',
        lineHeight: 0
    },
    headingText:{
        fontSize: 10,
        fontStyle: 'italic'
    },
    suburl:{
        width: 10,
        height: 10
    }

});

const ToolBar = withStyles({
    root:{
        minHeight: 55
    },
})(Toolbar);


const Header = () => {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const classes = useStyle();

    return (
        <AppBar className={classes.header}>
            <ToolBar>
                <Link to='/' className={classes.headingContainer}>
                    <img src={logoURL} alt="flipcart image" className={classes.flipkartLogo} />
                    <Box className={classes.heading}>
                        <Typography className={classes.headingText}>Explore</Typography>
                        <Typography className={classes.headingText} style = {{marginLeft: 5, color: '#FFF502'}}>Plus</Typography>
                        <img className={classes.suburl} src={subURL} alt="plus logo" style = {{marginLeft: 5}} />
                    </Box>
                </Link>
                <SearchBar/>
                <HeaderButtons/>
            </ToolBar>
        </AppBar>
    )
}

export default Header
