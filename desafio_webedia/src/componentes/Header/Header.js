import React, {useState} from 'react';
import Logo from "../Logo/Logo";
import BurgerMobileMenu from './MobileIcon/BurgerMobileMenu';
import SearchIconMenu from './SearchIcon/SearchIcon';
import SearchBar from './SearchBar/SearchBar';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import OverlayComponent from '../OverlayComponent/Overlay';

const Header = () => {
    const [SearchActive, setSearchActive] = useState(false);
    const [MobileMenuActive, setMobileMenuActive] = useState(false); 
    return (
                // A lógica aqui é, se a propriedade searchActive estiver true, alguns itens irão ter display: none
                <header>
                    <BurgerMobileMenu searchActive={SearchActive} MobileMenuActive={MobileMenuActive} clickMenu={() => setMobileMenuActive(true)} />
                    <Logo logoPath={require("../../static/img/logo.png")} target={""} searchActive={SearchActive} />
                    <SearchIconMenu searchActive={SearchActive} enableSearch={() => setSearchActive(true)} MobileMenuActive={MobileMenuActive} />
                    {SearchActive ? <SearchBar CloseSearchBar={() => setSearchActive(false)} /> : ''}
                    <HeaderMenu MobileMenuActive={MobileMenuActive} CloseMenu={() => setMobileMenuActive(false)} />
                    { MobileMenuActive && <OverlayComponent /> }
                </header>
    )
}

export default Header;