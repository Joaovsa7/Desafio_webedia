import React from 'react';
import PropTypes from 'prop-types';

const SearchIconMenu = ({searchActive, enableSearch}) => {
    return ( 
        <div className={"SearchIconMenu" + (searchActive ? ' search_active' : '')}>
            <img className="SearchIcon" src={require("../../../static/img/search.png")} onClick={enableSearch} alt="Clique aqui para abrir a barra de pesquisa" />
        </div>
     );
}

SearchIconMenu.propTypes = {
    searchActive: PropTypes.string.isRequired,
}
 
export default SearchIconMenu;