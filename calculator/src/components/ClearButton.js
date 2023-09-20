import React from 'react';
import '../Style-sheets/ClearButton.css'

//How could I change the props to destructuring?
const ClearButton = (props) => (
    <div className='clear-button' onClick={props.handleClick}>
        {props.children}
    </div>
);

export default ClearButton;