import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({href,searchActive, logoPath, target, MobileMenuActive}) => {
    return ( 
            <a href={href} className={"webedia_logo" + (searchActive || MobileMenuActive ? ' search_active' : '')} target={target} rel={`${target ? "noopener noreferrer" : false}`}>
                <img src={logoPath} alt="Webedia logo"  />
            </a>
     );
}
 
Logo.propTypes = {
    href: PropTypes.string.isRequired,
    searchActive: PropTypes.bool.isRequired,
    logoPath: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired
}

Logo.defaultProps = {
    href: '/',
}

export default Logo;