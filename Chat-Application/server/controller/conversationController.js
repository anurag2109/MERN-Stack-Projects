import Conversation from '../model/conversation.js';


export const newConversation = async (request, responce) =>{
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;
     
    try{
        const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
        if(exist) {
            responce.status(200).json('conversation already exists !!');
            return;
        }
        const newConversation =  new Conversation({
            members: [senderId, receiverId]
        })

        await newConversation.save();
        responce.status(200).json("new conversation add successfully!!");
    }catch(error){
        responce.status(500).json(error);
    }
}


export const getConversation = async (request, responce) =>{
    let sender = request.body.sender;
    let receiver = request.body.receiver;
  
    try{
        const conversation = await Conversation.findOne({ members: { $all: [receiver, sender] }})
        responce.status(200).json(conversation);
    }catch(error){
        responce.status(500).json(error);
    }
}
