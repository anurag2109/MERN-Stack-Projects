import React,{ useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

// context
import { UserContext } from '../../context/userProvider';
import { AccountContext } from '../../context/AccountProvider';

//components
import ChatHeader from './ChatHeader';
import Messages from './Messages';
import { useContext } from 'react';
import { getConversation } from '../../service/api';

const Chat = () => {

  const { person } = useContext(UserContext);
  const { account } = useContext(AccountContext)

  const [conversation, setConversation] = useState({});


  useEffect(async () => {
    const getConversationDetails = async () =>{
      let data = await getConversation({ sender: account.googleId, receiver: person.googleId});
      setConversation(data);
    } 
    getConversationDetails();
  },[person.googleId])

    return (
      <Box>
        <ChatHeader/>
        <Messages person={person} conversation={conversation}/>
      </Box>
    )
}

export default Chat;