import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Box)`
    display: flex;
    align-items: center;
    margin-top: 92px;
    background: #f44336;
    height: 48px;
    margin-bottom: 30px;
`

const Headline = styled(Box)`
    font-size: 14px;
    margin-left: 50px;
    color: #ffffff !important;
`
const Heading = () => {
    const appstore_logo = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const playstore_logo = 'https://assets.inshorts.com/website_assets/images/playstore.png';
    return(
        <Container>
            <Headline>
                For the best experience use inshorts app on your smartphone
            </Headline>
            <Box style={{marginLeft: 'auto'}}>
                <img src={playstore_logo} alt="play store logo" align="right" style={{height: '34px', borderRadius: '5px', margin: '0 50px 0 20px'}}/>
                <img src={appstore_logo} alt="apple store logo" align="right" style={{height: '34px', borderRadius: '5px', margin: '0 50px 0 20px'}}/>
            </Box>
        </Container>
    );
};

export default Heading;
