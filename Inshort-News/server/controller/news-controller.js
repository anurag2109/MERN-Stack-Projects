import News from "../model/newsSchema.js"


export const getNews = async (request, responce) =>{
    try{
        let data = await News.find({})
        responce.status(200).json(data);
    }catch(error){
        responce.status(500).json(error);
    }
}

