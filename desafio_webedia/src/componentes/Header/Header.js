import React, {useState, useEffect} from 'react';
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import BurgerMobileMenu from './MobileIcon/BurgerMobileMenu';
import SearchIconMenu from './SearchIcon/SearchIcon';
import SearchBar from './SearchBar/SearchBar';

const Header = () => {
    const [SearchActive, setSearchActive] = useState(false);
    return (
                // A lógica aqui é, se a propriedade searchActive estiver true, alguns itens irão ter display: none
                <header>
                    <BurgerMobileMenu searchActive={SearchActive} />
                    <Logo logoPath={require("../../static/img/logo.png")} target={""} searchActive={SearchActive} />
                    <SearchIconMenu searchActive={SearchActive} enableSearch={() => setSearchActive(true)} />
                    {SearchActive && ( <SearchBar CloseSearchBar={() => setSearchActive(false)} /> )}
                </header>   
    )
}

export default Header;