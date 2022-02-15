import React from 'react'
import { Box, makeStyles, InputBase } from '@material-ui/core';
import { EmojiEmotionsOutlined, AttachFile, Mic, SettingsOverscanOutlined } from '@material-ui/icons';


const useStyle = makeStyles(theme => ({
  footer:{
    height: 55,
    background: '#ededed',
    // width: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: '0 15px',
    '& > *':{
      margin: 5,
      color: '#919191'
    }
  },
  clipItem:{
    transform: 'rotate(40deg)'
  },
  inputRoot: {
      width: '90%'
  },
  inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: 25,
      fontSize: 14,
      height: 20,
      width: '90%'
  },
  searchBox:{
    background: '#ffffff',
    borderRadius: 18,
    width: '100%'
  }
}))

const Footer = ({ sendText, setValue, value }) => {
  const classes = useStyle();

  return (
    <Box className={classes.footer}>
      <EmojiEmotionsOutlined/>
      <AttachFile className={classes.clipItem}/>
      <Box className={classes.searchBox}>
        <InputBase
          placeholder='Type a message'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onKeyPress = {(e)=>sendText(e)}
          onChange = {(e) => setValue(e.target.value)}
          value = {value}
        />
        </Box>
        <Mic/>
    </Box>
  )
}

export default Footer;