import express from 'express';

import { addUser, getUser } from '../controller/userController.js';
import { newConversation } from '../controller/conversationController.js'
const route = express.Router();

route.post('/add', addUser)
route.get('/users', getUser)
route.post('/conversation/add', newConversation)

export default route;