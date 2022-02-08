import React, { useEffect, useState} from 'react';
import { getNews } from '../service/api';
import News from './News';

const Articles = () => {
    const [news, setNews] = useState([]);

    useEffect(()=>{
        dailyNews();
    }, [])
    
    const dailyNews = async () =>{
        let responce = await getNews();
        setNews(responce.data);
        console.log(responce);
    }

    return(
        
        news.map(article => (
                <News article={article} />
            ))
    )
};

export default Articles;
