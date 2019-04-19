import React from 'react';
import PropTypes from 'prop-types';

const CloseBtn = ({onClick, MobileMenuActive}) => {
    return ( 
            <div className={"CloseBtn" + (MobileMenuActive ? ' Menu' : ' SearchBar')}>
                <button type="button" onClick={onClick}>X</button>
            </div>
     );
}

CloseBtn.propTypes = {
    onClick: PropTypes.func.isRequired
}
 
export default CloseBtn;