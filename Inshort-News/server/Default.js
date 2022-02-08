import { data } from './data/data.js';
import News from './model/newsSchema.js';

const DefaultData = async () =>{
    try{
        await News.deleteMany({});
        await News.insertMany(data);
        console.log("Data inserted successfully");
    }catch(error){
        console.log("Error while inserting data: ", error.message)
    }
}

export default DefaultData;