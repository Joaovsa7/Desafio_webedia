import React from 'react';
import PropTypes from 'prop-types';
import CloseBtn from '../CloseBtn/CloseBtn';

export default function SearchBar({ CloseSearchBar }){
    return (
        <React.Fragment>
            <form id="searchForm">
                <input type="text" className="inputMobile" placeholder="Pesquisa" />
                <button type="submit" className="searchCloseIcon" onClick={() => alert('Click')}>
                    <img src={require("../../../static/img/search.png")} alt="Ícone de busca" />
                </button>
            </form>
            <CloseBtn onClick={CloseSearchBar} />
        </React.Fragment>
     );
}
