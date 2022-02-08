import mongoose from 'mongoose';

const connection = async () =>{
    try{
        const URL = `mongodb+srv://anu:12345@flipcart.tbjj2.mongodb.net/FLIPCART?retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log("Database connected successfully")
    }catch(error){
        console.log("Error while connecting with database: ", error.message)
    }
}

export default connection;

