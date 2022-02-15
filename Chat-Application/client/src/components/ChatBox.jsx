import { Box, Dialog, withStyles, makeStyles, Typography } from '@material-ui/core';
import React, { useContext } from 'react';

// context
import { UserContext } from '../context/userProvider';

// components
import Menu from './menu/Menu';
import Chat from './chat/Chat';
import EmptyChat from './chat/EmptyChat';

const useStyle = makeStyles({
    component: {
        display: 'flex'
    },
    leftComponent:{
        minWidth: 380
    }, 
    rightComponent:{
        borderLeft: `1px solid rgba(0, 0, 0, 0.14)`,
        width: '79%',
        minWidth: 300,
        height: '100%',
        
    }
})

const style = {
    dialogPaper:{
        height: '95%',
        width: '90%',
        boxShadow: 'none',
        maxHeight: '100%',
        maxWidth: '100%',
        overFlow: 'hidden'
    }
}
const ChatBox = ({ classes }) => {
    const classname = useStyle();
    const { person } = useContext(UserContext);

    return(
        <Dialog
            open={true}
            classes = {{ paper : classes.dialogPaper }}
            BackdropProps={{style: {backgroundColor: 'unset'}}}
        >
            <Box className={classname.component}>
                <Box className={classname.leftComponent}>
                    <Menu/>
                </Box>
                <Box className={classname.rightComponent}>
                    {
                        Object.keys(person).length ? <Chat/> : <EmptyChat/>
                    }
                    
                </Box>
            </Box>
        </Dialog>
    );
};

export default withStyles(style)(ChatBox);
