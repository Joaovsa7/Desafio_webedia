import React, {useState} from 'react';
import Logo from "../Logo/Logo";
import BurgerMobileMenu from './MobileMenuIcon/BurgerMobileMenu';
import SearchIconMenu from './SearchIcon/SearchIcon';
import SearchBar from './SearchBar/SearchBar';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import OverlayComponent from '../OverlayComponent/Overlay';

export default function Header({ ChangeFetchParams }){

    const [SearchActive, setSearchActive] = useState(false);
    const [MobileMenuActive, setMobileMenuActive] = useState(false); 

    return (
                // A lógica aqui é, se a propriedade searchActive estiver true, alguns itens irão ter display: none
                <header>
                    <BurgerMobileMenu searchActive={SearchActive} MobileMenuActive={MobileMenuActive} clickMenu={() => setMobileMenuActive(true)} />
                    <Logo logoPath={require("../../static/img/logo.png")} target={""} searchActive={SearchActive} />
                    <SearchIconMenu searchActive={SearchActive} enableSearch={() => setSearchActive(true)} MobileMenuActive={MobileMenuActive} />
                    {SearchActive ? <SearchBar CloseSearchBar={() => setSearchActive(false)} /> : null}
                    <HeaderMenu MobileMenuActive={MobileMenuActive} ChangeFetchParams={ChangeFetchParams} CloseMenu={() => setMobileMenuActive(false)} />
                    { MobileMenuActive && <OverlayComponent /> }
                </header>
    )
}