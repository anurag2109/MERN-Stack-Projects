import React, { useContext } from 'react'
import { Box, Typography, makeStyles} from '@material-ui/core';
import { setConversation } from '../../service/api.js';

import { AccountContext } from '../../context/AccountProvider';
import { UserContext } from '../../context/userProvider';

const useStyle = makeStyles({
    dp:{
        width: 50,
        height: 50,
        borderRadius: '50%',
        padding: '0 14px'
    },
    container:{
        display: 'flex',
        height: 40,
        padding: '13px 0',
        cursor: 'pointer'
    }
})

const Conversation = ({ user }) => {
    const url = user.imageUrl;
    const classes = useStyle();

    const { account } = useContext(AccountContext);
    const { setPerson } = useContext(UserContext);

    const setUser = async() =>{
        setPerson(user);
        await setConversation({ senderId: account.googleId, receiverId: user.googleId })
    }

  return (
    <Box className={classes.container} onClick={()=> setUser()}>
        <Box>
            <img src={url} alt='dp' className={classes.dp}/>
        </Box>
        <Box>
            <Typography >
                {user.name}
            </Typography>
        </Box>
    </Box>
    )
}

export default Conversation;