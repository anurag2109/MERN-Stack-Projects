import React from 'react';
import { Box, AppBar, Toolbar, makeStyles } from '@material-ui/core';
import { AccountContext } from '../context/AccountProvider.jsx';
import { useContext } from 'react';

// component
import Login from './account/Login';
import ChatBox from './ChatBox';

const useStyle = makeStyles({
    appbar: {
        height: 200,
        background: '#00bfa5',
        boxShadow: 'none'
    },
    component:{
        background: '#DCDCDC',
        height: '100vh'
    },
    chatAppbar: {
        height: 115,
        background: '#128c7e',
        boxShadow: 'none'
    },
})
const Messanger = () => {
    const classes = useStyle();
    const { account, setAccount } = useContext(AccountContext);

    return(
        <Box className={classes.component}>
            <AppBar className={ account ? classes.chatAppbar : classes.appbar }>
                <Toolbar></Toolbar>
            </AppBar>
            
            {
                account ? <ChatBox/> : <Login/> 
            }
            
        </Box>
    );
};

export default Messanger;
