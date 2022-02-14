import User from '../model/user.js';

export const addUser = async (request, responce) =>{
    try{
        let exist = await User.findOne({ googleId: request.body.googleId })
        if(exist){
            responce.status(200).json('user already exist!!');
            return;
        }
        const newUser =  new User(request.body);
        await newUser.save();
        responce.status(200).json('user saved successfully !!')
    }catch(error){
        responce.status(500).json(error)    
    }
}

export const getUser = async (request, responce) =>{
    try{
        const users = await User.find({});
        responce.status(200).json(users);

    }catch(error){
        responce.status(500).json(error)
    }
}