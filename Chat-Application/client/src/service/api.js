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

