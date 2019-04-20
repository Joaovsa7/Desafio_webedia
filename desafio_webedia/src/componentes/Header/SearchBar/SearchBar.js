import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CloseBtn from '../CloseBtn/CloseBtn';

export default function SearchBar({ CloseSearchBar, ChangeFetchParams }){

    const [query, setQuery] = useState("")

    function onSubmit(e){
        e.preventDefault();
        ChangeFetchParams(false, query)
        setQuery("")
        CloseSearchBar()
    }

    function handleChange(e){
        console.log(e.target.value)
        setQuery(e.target.value)
    }

    return (
        <React.Fragment>
            <form id="searchForm" onSubmit={onSubmit}>
                <input type="text" className="inputMobile" value={query} onChange={handleChange} placeholder="Pesquisa" />
                <button type="submit" className="searchCloseIcon">
                    <img src={require("../../../static/img/search.png")} alt="Ícone de busca" />
                </button>
            </form>
            <CloseBtn onClick={CloseSearchBar} />
        </React.Fragment>
     );
}
