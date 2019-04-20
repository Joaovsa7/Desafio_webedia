import React from 'react';
import Logo from '../Logo/Logo';

const styles = {
    footer: {
        width: '100%',
        backgroundColor: 'white',
        padding: "40px 0",
        textAlign: 'center',
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