import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return ( 
        <nav id="menu">
                <ul>
                    <Link>Notícias em Destaque</Link>
                    <Link>Notícias do Brasil</Link>
                    <Link>Notícias dos EUA</Link>
                    <Link>Notícia da Argetina</Link>
                    <Link>Notícias da França</Link>
                </ul>
        </nav>
     );
}
 
export default Menu;