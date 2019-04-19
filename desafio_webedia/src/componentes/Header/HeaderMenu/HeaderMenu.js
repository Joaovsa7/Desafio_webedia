import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';
import CloseBtn from '../CloseBtn/CloseBtn';

const HeaderMenu = ({MobileMenuActive, CloseMenu}) => {
    const menuItems = [
        {countryId: 'br', name: 'Notícias do Brasil'},
        {countryId: 'br', name: 'Notícias da Argentina'},
        {countryId: 'br', name: 'Notícias da '},
        {countryId: 'br', name: 'Notícias do Brazil'},
        {countryId: 'br', name: 'Notícias do Brazil'},
    ]
    return ( 
        <nav className={MobileMenuActive ? 'enter' : ''}>
            <ul>
                {
                    menuItems.map((item) => (
                        <li><Link>{item.name}</Link></li>
                    ))
                }
            </ul>
           {MobileMenuActive ? <CloseBtn MobileMenuActive={MobileMenuActive} style={{display:"none"}} onClick={CloseMenu} /> : ''}
        </nav>
    );
}
 
export default HeaderMenu;