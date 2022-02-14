import React from 'react';
import { Box } from '@material-ui/core';

//components
import ChatHeader from './chatHeader';
import Messages from './Messages';

const Chat = () => {
    return (
      <Box>
        <ChatHeader/>
        <Messages/>
      </Box>
    )
}

export default Chat;