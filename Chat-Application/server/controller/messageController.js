import Message from "../model/msg.js";
import Conversation from "../model/conversation.js";


export const newMessage = async (request, responce) =>{
    const newMsg =  new Message(request.body);
    try{
        await newMsg.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, { message: request.body.text })
        responce.status(200).json('msg saved successfully !!')
    }catch(error){
        responce.status(500).json(error)    
    }
}

export const getMessages = async(request, response) =>{
    try{
        const msg = await Message.find({ conversationId: request.params.id })
        response.status(200).json(msg)
    }catch(error){
        response.status(500).json(error) 
    }
}
