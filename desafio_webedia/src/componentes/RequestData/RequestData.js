import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import CardNews from './Card_News/Card_News';

export default function RequestData(){
    const [ArticlesNews, setArticlesNews] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    async function FetchNews(country_key, userText){
        //carregar as principais noticias do brasil no momento
        let url = `https://newsapi.org/v2/top-headlines?country=br&apiKey=4712473a768541adbee8210942d58a42`
        if(country_key){
            url = `https://newsapi.org/v2/top-headlines?country=${country_key}&apiKey=4712473a768541adbee8210942d58a42`
        }
        else if(userText){
            url = `https://newsapi.org/v2/everything?q=${userText}&apiKey=4712473a768541adbee8210942d58a42`
        }

        const data = await fetch(url)
        const News = await data.json()
        setArticlesNews(News.articles)
        console.log(ArticlesNews)
    }

    useEffect(() => {
        FetchNews();
        return () => FetchNews()
    }, [])

    return ( 
            <React.Fragment>
                <Header ChangeFetchParams={FetchNews} />
                <CardNews News={ArticlesNews} />
            </React.Fragment>
     );
}
 
