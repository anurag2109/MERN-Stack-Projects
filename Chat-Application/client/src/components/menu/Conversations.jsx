import React,{ useEffect, useState, useContext } from 'react'
import { getUsers } from '../../service/api.js';
import { Box, makeStyles } from '@material-ui/core';
import Conversation from './Conversation.jsx';
import { AccountContext } from '../../context/AccountProvider.jsx';


const useStyle = makeStyles({
  component:{
    height: '81vh',
    overflow: 'overlay'
  }
})

const Conversations = ({ text }) => {

  const [users, setUsers] = useState([])
  const { account } = useContext(AccountContext);

  const classes = useStyle()


    useEffect(() =>{
      const fetchData = async () =>{
        let data = await getUsers();
        let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(fiteredData);
      }
      fetchData();
    }, [text])

    return (
      <Box className={classes.component}>
        {
          users.map(user => (
            user.googleId !== account.googleId && 
            <Conversation user={user} />
          ))
        }

      </Box>
    )
}

export default Conversations