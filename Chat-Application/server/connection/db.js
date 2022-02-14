import express from "express";
import mongoose from 'mongoose';


const Connection =  async (username, password) =>{
    const URL = `mongodb+srv://${username}:${password}@flipcart.tbjj2.mongodb.net/FLIPCART?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database connection successfully!!")
    }catch(error){
        console.log("Error while connection: ", error.message);
    }

}

export default Connection;