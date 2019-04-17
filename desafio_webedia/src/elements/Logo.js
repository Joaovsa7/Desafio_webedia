import React from 'react';

const Logo = (props) => {
    return ( 
        <img src={require("../static/img/logo.png")} alt="Webedia logo" style={{padding: props.padding, margin: `${props.margin == false ? '' : '0 auto'}`}} />
     );
}
 
export default Logo;