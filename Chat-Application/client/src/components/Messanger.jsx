import React from 'react';
import { Box, AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { AccountContext } from '../context/AccountProvider';

// component
import Login from './account/Login';
import { useContext } from 'react';
import ChatBox from './ChatBox';

const useStyle = makeStyles({
    appbar: {
        height: 200,
        background: '#00bfb5',
        boxShadow: 'none'
    },
    component:{
        background: '#DCDCDC',
        height: '100vh'
    }
})
const Messanger = () => {
    const classes = useStyle();
    const { account } = useContext(AccountContext);

    return(
        <Box className={classes.component}>
            <AppBar className={classes.appbar}>
                <Toolbar></Toolbar>
            </AppBar>
            { account ? <ChatBox/> : <Login/> }
        </Box>
    );
};

export default Messanger;
