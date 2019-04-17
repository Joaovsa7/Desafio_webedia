import React from 'react';
import Logo from "../../elements/Logo";
import Container from '../../elements/Container/Container';

const Header = (props) => {
    return (
            <Container>
                <header>
                    <Logo padding={"21px 10px"} />
                    <div id="search">
                        <input type="text" placeholder="Pesquise alguma matéria" />
                    </div>
                </header>   
            </Container>
    )
}

export default Header;