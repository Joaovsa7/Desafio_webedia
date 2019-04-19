import React from 'react';
import PropTypes from 'prop-types';

const CloseBtn = ({onClick}) => {
    return ( 
            <div className="CloseBtn">
                <button type="button" onClick={onClick}>X</button>
            </div>
     );
}

CloseBtn.propTypes = {
    onClick: PropTypes.func.isRequired
}
 
export default CloseBtn;