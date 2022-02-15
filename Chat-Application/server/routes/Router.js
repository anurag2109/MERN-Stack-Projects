import express from 'express';

import { addUser, getUser } from '../controller/userController.js';
import { newConversation, getConversation } from '../controller/conversationController.js'
import { newMessage } from '../controller/messageController.js';

const route = express.Router();

route.post('/add', addUser)
route.get('/users', getUser)

route.post('/conversation/add', newConversation)
route.post('/conversation/get', getConversation)

route.post('/message/add', newMessage)


export default route;