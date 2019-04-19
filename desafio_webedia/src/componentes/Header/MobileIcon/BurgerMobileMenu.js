import React from 'react';
import PropTypes from 'prop-types';

const BurgerMobileMenu = ({searchActive, clickMenu}) => {
    return ( 
        <div className={"BurgerMobileMenu" + (searchActive ? ' search_active' : '')}>
            <img className="MobileIcon" src={require("../../../static/img/burger_menu.png")} onClick={clickMenu} alt="Clique para abrir o menu" />
        </div>
     );
}

BurgerMobileMenu.propTypes = {
    searchActive: PropTypes.string.isRequired,
}
 
export default BurgerMobileMenu;