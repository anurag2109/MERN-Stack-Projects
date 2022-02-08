import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const Container = styled(AppBar)`
    background: #ffffff;
    height: 72px;
`
const Header = () => {
    const logo = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png'
    return(
        <Container>
            <Toolbar>
                <MenuIcon style={{color: "black"}}/>
                <img src={logo} alt="logo" style={{height: 50, margin: 'auto'}}/>
            </Toolbar>
        </Container>
    );
};

export default Header;
