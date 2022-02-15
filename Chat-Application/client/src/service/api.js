import axios from 'axios';

const URL = 'http://localhost:8000';

export const addUser = async (data) =>{
    try{
       return await axios.post(`${URL}/add`, data)
    }catch(error){
        console.log("Error while calling addUser: ", error)
    }
}

export const getUsers = async () =>{
    try{
       let responce =  await axios.get(`${URL}/users`)
       return responce.data;
    }catch(error){
        console.log("Error while calling getUser: ", error)
    }
}

export const setConversation = async (data) =>{
    try{
       await axios.post(`${URL}/conversation/add`, data)
    }catch(error){
        console.log("Error while calling setConversation api: ", error)
    }
}

export const getConversation = async (data) =>{
    try{
       let response = await axios.post(`${URL}/conversation/get`, data)
       return response.data;
       
    }catch(error){
        console.log("Error while calling getConversation api: ", error)
    }
}


export const newMessage = async (data) =>{
    try{
       await axios.post(`${URL}/message/add`, data)
    }catch(error){
        console.log("Error while calling newMessage api: ", error)
    }
}
