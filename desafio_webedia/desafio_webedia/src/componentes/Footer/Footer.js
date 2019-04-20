import React from 'react';
import Logo from '../Logo/Logo';

const styles = {
    footer: {
        width: '100%',
        height: '10vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        position: 'absolute',
    }
}

export default function Footer(){
    return ( 
            <footer style={styles.footer}>
                 <Logo logoPath={require("../../static/img/logo.png")} target={""} />
            </footer>   
        );
    }