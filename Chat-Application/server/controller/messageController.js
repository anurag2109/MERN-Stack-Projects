import Message from "../model/msg.js";

export const newMessage = async (request, responce) =>{
    const newMsg =  new Message(request.body);
    try{
        await newMsg.save();
        responce.status(200).json('msg saved successfully !!')
    }catch(error){
        responce.status(500).json(error)    
    }
}