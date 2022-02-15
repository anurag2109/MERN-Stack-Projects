import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

const useStyle = makeStyles({
    container:{
        background: '#f8f9f8',
        height: '84%',
        padding: '50px 0',
        textAlign: 'center'
    },
    image:{
        width: 420
    }
})
const EmptyChat = () => {
    const classes = useStyle();

    const emptyurl = 'https://ik.imagekit.io/ag/wp-content/uploads/2015/01/QR-connected.png';

  return (
    <Box className={classes.container}>
        <img src={emptyurl} alt="empty image" className={classes.image} />
    </Box>
  )
}

export default EmptyChat