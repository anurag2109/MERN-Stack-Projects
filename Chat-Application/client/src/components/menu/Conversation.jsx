import React, { useContext, useEffect, useState } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import { getConversation, setConversation } from "../../service/api.js";

import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from "../../context/userProvider";

const useStyle = makeStyles({
  dp: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    padding: "0 14px",
  },
  container: {
    display: "flex",
    height: 40,
    padding: "13px 0",
    cursor: "pointer",
  },
  timeStamp: {
    fontSize: 12,
    marginLeft: "auto",
    marginRight: 20,
    color: '#667781'
  },
  text:{
      color: 'rgba(0, 0, 0, 0.6)',
      fontSize: 14
  }
});

const Conversation = ({ user }) => {
  const url = user.imageUrl;
  const classes = useStyle();

  const { account, newMessageFlag } = useContext(AccountContext);
  const { setPerson } = useContext(UserContext);
  const [message, setMessage] = useState({});

  useEffect(() => {
    const getConversationMsg = async () => {
      const data = await getConversation({
        sender: account.googleId,
        receiver: user.googleId,
      });
      setMessage({ text: data.message, timestamp: data.updatedAt });
    };
    getConversationMsg();
  }, [newMessageFlag]);

  const setUser = async () => {
    setPerson(user);
    await setConversation({
      senderId: account.googleId,
      receiverId: user.googleId,
    });
  };

  return (
    <Box className={classes.container} onClick={() => setUser()}>
      <Box>
        <img src={url} alt="dp" className={classes.dp} />
      </Box>

      <Box style={{ width: "100%" }}>
        <Box style={{ display: "flex" }}>
          <Typography>{user.name}</Typography>
          {message.text && (
            <Typography className={classes.timeStamp}>
              {new Date(message.timestamp).getHours()}:
              {new Date(message.timestamp).getMinutes()}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography className={classes.text}>{message.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Conversation;
