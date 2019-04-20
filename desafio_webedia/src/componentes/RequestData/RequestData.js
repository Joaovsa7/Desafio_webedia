import React, { useEffect, useState, Suspense, lazy } from 'react';
import Header from '../Header/Header';
import CardNews from './Card_News/Card_News';
import Footer from '../Footer/Footer';
import LoadingComponent from '../Loading/Loading';
import Container from '../Container/Container';

export default function RequestData(){
    const [ArticlesNews, setArticlesNews] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    async function FetchNews(country_key, userText){
        setLoading(true)
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
        if(News.status === "ok"){
            setLoading(false)
            setArticlesNews(News.articles)
        }
        console.log(ArticlesNews)
    }

    useEffect(() => {
        FetchNews();
        return () => FetchNews()
    }, [])

    return ( 
            <div>
                <Container>
                    <Header ChangeFetchParams={FetchNews} />
                    { loading ? ( <LoadingComponent /> ) : ( <CardNews News={ArticlesNews} /> )}
                </Container>
                <Footer />
            </div>
     );
}
 
