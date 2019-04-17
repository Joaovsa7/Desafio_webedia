import React from 'react';



const Container = (props) => {
    return ( 
        <div id="container">
            {props.children}
        </div>
     );
}
 
export default Container;