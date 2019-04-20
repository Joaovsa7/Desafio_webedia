import React from 'react';

function NewsContainer({ News }){
    //esta funcao vai reduzir a descricao da noticia quando encontrar o primeiro ponto final
    function reduceDescription(description){
        let reduceText = description.indexOf(".")
        return description.slice(0, reduceText)
    }
    console.log(News)
    //Como algumas notícias não possuem o autor no json, preciso verificar
    return ( 
            <section className="News_container">
                {
                    News.map(({author, description, publishedAt, title, url, urlToImage}, index) => (
                        <div className={`News col-${index}`}>
                            <img alt="Imagem da news" src={urlToImage} />
                            <div className="infos">
                                <span>{publishedAt}</span>
                                <h3><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h3>
                                <p>{reduceDescription(description)}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
     );
}
 

// Dados que vou consumir da API
//author
//description
//publishedAt
//title
//url
//urlToImage
export default NewsContainer;