import React, { useState, useContext, useEffect, useRef } from 'react'
import { Box, makeStyles } from '@material-ui/core';
import { newMessage, getMessages } from '../../service/api.js';


//context
import { AccountContext } from '../../context/AccountProvider'

//component
import Footer from './Footer';
import Message from './Message.jsx';


const useStyle = makeStyles({
  container: {
    backgroundImage: `url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
    backgroundSize: '50%',
    
  },
  component:{
    height: '79vh',
    overflowY: 'scroll'
  },
  msgComponent:{
    padding: '1px 80px'
  }
})

const Messages = ({ person, conversation }) => {
  const classes = useStyle();
  const [value, setValue] = useState();
  const [messages, setMessages] = useState()
  const [incommingMsg, setIncommingMsg] = useState(null);

  const { account, socket, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);
  
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: 'smooth'})
  },[messages])


  useEffect(()=>{
    socket.current.on('getMessage', data =>{
      setIncommingMsg({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  }, [])

  useEffect(()=>{
    incommingMsg && conversation?.members?.includes(incommingMsg.sender) && 
    setMessages(prev => [...prev, incommingMsg])
  },[incommingMsg, conversation])


  useEffect(()=>{
    const getMsgDetails = async () =>{
      let responce = await getMessages(conversation._id);
      setMessages(responce.data);
    }
    getMsgDetails();
  },[conversation?._id, person._id, newMessageFlag])


  const receiverId = conversation?.members?.find(member => member !== account.googleId)


  const sendText = async (e) =>{
    let code = e.keyCode || e.which
    if(!value) return;

    if(code === 13){
      let message = {
        sender: account.googleId,
        conversationId: conversation._id,
        text: value
      }

      socket.current.emit('sendMessage',{
        senderId: account.googleId,
        receiverId,
        text: value
      })

      await newMessage(message);
      setValue('');
      setNewMessageFlag(prev => !prev);
    }
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.component}>
        {
          messages && messages.map(msg=>(
            <Box className={classes.msgComponent} ref={scrollRef}>
              <Message message={msg}/>
            </Box>
          ))
        }
      </Box>
      <Footer sendText={sendText} setValue={setValue} value={value}/>
    </Box>
  )
}

export default Messages