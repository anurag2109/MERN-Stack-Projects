import User from '../model/userSchema.js';

export const userSignup = async (request, response) =>{
    try{
        const exist = await User.findOne({ username: request.body.username});
        if(exist){
            return response.status(400).json("Username already exist");
        }

        const user = request.body;
        const newUser =  new User(user);
        await newUser.save();

        response.status(200).json("User is succussfully registered");
    }catch(error){
        console.log("Error: ", error.message);
    }
}


export const userLogin = async (request, response) =>{
    try{
        const user = await User.findOne({ username: request.body.username, password: request.body.password});
        if(user){
            return response.status(200).json(`${request.body.username} successfully login`);
        }else{
            return response.status(401).json(`Invalid login`);
        }
    }catch(error){
        console.log("Error: ", error.message);
    }
}