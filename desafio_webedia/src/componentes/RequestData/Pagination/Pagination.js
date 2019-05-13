import React, { useState, useEffect } from 'react';

function PaginationComponent({ pagesNumber, fetchParams, requestPagination }){

    console.log(fetchParams)
    console.log(pagesNumber)

    const [pages, setPagesArray] = useState([]);
    const array = []

    function calculatePage(pagesNumber){
        //é necessária esta verificacao pq se o usuario pesquisar alguma coisa, a api dá mais de 4mil resultados
        if(pagesNumber > 10){
            pagesNumber = 10;
        }
        for(let i = 0; i < pagesNumber; i++){
            array.push(i + 1)
            setPagesArray(array)
       }
    }

    useEffect(() => {
        if(typeof pagesNumber !== undefined){
            calculatePage(pagesNumber)
        }
        console.log(array)
    }, [])

    //destructuring para pegar os valores
    const { country, userText, pageNumber } = fetchParams

    return (
        <React.Fragment>
            <div className="pagination">
                <div id="items">
                        {
                            pages.map((pagina, index) => (
                                //para deixar o item ativo, usei a logica se o index do numero for o mesmo que o page number,
                                //ele ficará atvo
                                <span key={index} className={index + 1 === pageNumber ? 'item active-page' : 'item'} onClick={() => requestPagination(country, userText ,null, index + 1)}>{pagina}</span>
                            ))
                        }
                </div>
            </div>
        </React.Fragment>
    )

}

export default React.memo(PaginationComponent)