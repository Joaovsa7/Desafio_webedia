import React from 'react';

function NewsContainer({ News }){
    function reduceDescription(description){
            //esta funcao vai reduzir a descricao da noticia quando encontrar o primeiro ponto final
            //caso nao haja nenhuma descricao vindo da api, ela vai sugerir que o usuario clique no titul da noticia para lê-la
            //ou se não houver ponto final, cortar a string até 120 caracteres
       const findPoint = description.indexOf(".")
        if(findPoint !== -1){
           return description.slice(0, findPoint).concat(".")
        }
        else if(description.length <= 0){
            return description.concat("Esta notícia não contém uma descrição, clique no título para acessá-la por completo.")
        }
        else{
            return description.slice(0, 120).concat("...")
        }
    }

    //formatando a data para o padrao brasileiro, DD/MM/YYYY
    function formatPublishedAt(publishedAt){
        return publishedAt.split('T', 1).toString().split("-").reverse().toString().replace(/,/g, "/")
    }

    //formatando a fonte, algumas pesquisas dão o site completo + outras informações, aqui estou recortando
    //o source caso haja .com.br (estou indentificando isso pelo o ponto final)
    function formatSourceNews(source){
        const format = source.indexOf(".")
        if(format !== -1){
            return source.slice(0, format).toUpperCase()
        }
        else {
            return source.toUpperCase()
        }
    }
    console.log(News)
    //Como algumas notícias não possuem o autor no json, preciso verificar
    return ( 
            <section className="News_container">
                {
                    News.map(({source, description, publishedAt, title, url, urlToImage}, index) => (
                        <div className={`News col-${index}`}>
                            <div className="imgBox">
                                <img alt="Imagem da news" src={urlToImage} />
                            </div>
                            <div className="infos">
                                {publishedAt ? ( <span>{formatPublishedAt(publishedAt)}</span> ) : 'Sem data'}
                                <h3><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h3>
                                <p className="description">{reduceDescription(description)}</p>
                                <p className="author">{source ? ( `POR: ${formatSourceNews(source.name)}` ) : 'POR: DESCONHECIDO'}</p>
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