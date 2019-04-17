import React from 'react';
import Logo from '../elements/Logo.js'

const styles = {
    footer: {
        width: '100%',
        backgroundColor: 'white',
        textAlign: 'center'
    }
}

const Footer = () => {
    return ( 
            <footer style={styles.footer}>
                <a href="http://jobs.webedia.group/frontend" target="_blank" rel="noopener noreferrer"><Logo /></a>
            </footer>   
        );
    }   
 
export default Footer;