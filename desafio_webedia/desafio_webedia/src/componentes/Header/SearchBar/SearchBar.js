import React, { useState } from 'react';
import CloseBtn from '../CloseBtn/CloseBtn';
import ErrorComponent from '../../Error/Error';

export default function SearchBar({ CloseSearchBar, ChangeFetchParams, SearchActive, setError }){

    const [query, setQuery] = useState("")

    function onSubmit(e){
        e.preventDefault();
        if(query === ""){
            alert("O campo não pode estar vazio")
            return false;
        }
        ChangeFetchParams(false, query)
        setQuery("")
        CloseSearchBar()
    }

    function handleChange(e){
        setQuery(e.target.value)
    }

    return (
            <div className={"formBox" + (SearchActive ? ' showing' : '')}>
                <form id="searchForm" onSubmit={onSubmit}>
                    <input type="text" className="inputMobile" value={query} onChange={handleChange} placeholder="Pesquisa" autoFocus={`${window.innerWidth > 768 ? true : false}`}/>
                    <button type="submit" className="searchSubmitIcon">
                        <img src={require("../../../static/img/search.png")} alt="Ícone de busca" />
                    </button>
                </form>
                <CloseBtn onClick={CloseSearchBar} />
            </div>
     );
}
