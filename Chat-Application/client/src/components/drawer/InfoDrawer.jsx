import React from 'react'
import { Drawer, Typography, makeStyles } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import Profile from './Profile';

const useStyle = makeStyles({
  header:{
      background: '#00bfa5',
      height: 97,
      color: '#fff',
      display: 'flex',
      '& > *':{
        marginTop: 'auto',
        padding: 15,
        fontWeight: 600
      }
  },
  component:{
    background: '#ededed',
    height: '85%'
  }
})

const InfoDrawer = ({ open, setOpen}) => {

  const classes = useStyle();

  const handleClose = () =>{
      setOpen(false);
  }

  return (
    <Drawer open={open} onClose={handleClose}>
        <Box className={classes.header}>
          <ArrowBack onClick={()=> handleClose()}/>
          <Typography>Profile</Typography>
          
        </Box>
        <Box className={classes.component}>
          <Profile/>
        </Box>
    </Drawer>
  )
}

export default InfoDrawer