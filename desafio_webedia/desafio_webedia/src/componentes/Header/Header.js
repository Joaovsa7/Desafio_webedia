import React, {useState, useEffect} from 'react';
import Logo from "../Logo/Logo";
import BurgerMobileMenu from './MobileMenuIcon/BurgerMobileMenu';
import SearchIconMenu from './SearchIcon/SearchIcon';
import SearchBar from './SearchBar/SearchBar';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import OverlayComponent from '../OverlayComponent/Overlay';

export default function Header({ ChangeFetchParams, setError }){
    
    const [SearchMobileActive, setSearchMobileActive] = useState(false);
    const [MobileMenuActive, setMobileMenuActive] = useState(false); 
    
    return (
        // A lógica aqui é, se a propriedade SearchMobileActive estiver true, alguns itens irão ter display: none
        <React.Fragment>
            <header>
                <BurgerMobileMenu searchActive={SearchMobileActive} MobileMenuActive={MobileMenuActive} clickMenu={() => setMobileMenuActive(true)} />
                <Logo logoPath={require("../../static/img/logo.png")} target={""} searchActive={SearchMobileActive} />
                <SearchIconMenu searchActive={SearchMobileActive} enableSearch={() => setSearchMobileActive(true)} MobileMenuActive={MobileMenuActive} />
                <SearchBar setError={setError} ChangeFetchParams={ChangeFetchParams} SearchActive={SearchMobileActive} setSearchActive={setSearchMobileActive} CloseSearchBar={() => setSearchMobileActive(false)} />
                { MobileMenuActive && <OverlayComponent /> }
            </header>
            <HeaderMenu MobileMenuActive={MobileMenuActive} ChangeFetchParams={ChangeFetchParams} CloseMenu={() => setMobileMenuActive(false)} />
        </React.Fragment>
        )
    }