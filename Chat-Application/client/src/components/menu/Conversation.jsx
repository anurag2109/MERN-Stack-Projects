import React from 'react'
import { Box, Typography, makeStyles} from '@material-ui/core';


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

  return (
    <Box className={classes.container}>
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