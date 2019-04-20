import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorComponent({ message, error }){
        
        return (
                <div className={"errorComponent" + (error ? " show" : "")}>
                        <h3>{ message }</h3>
                </div>
        )
}

ErrorComponent.propTypes = {
    message: PropTypes.string.isRequired
}

