import React from 'react';
//import styles
import '../Style-sheets/Button.css'

function Button(props) {
//The children prop is a special prop that is passed to components. It is an object that contains the elements that a component wraps.
//Template literals are string literals that enable the use of embedded expressions.(``)

  const isOperator = value => {
    //It is used to know if that string of characters is not a number or a point or an equal sign, then if the three conditions are met we consider it an operator and return true, if not we return false
    return isNaN(value) && (value !== '.') && (value !== '=')
  };

  return (
    //.trim() --> allows you to remove spaces from the beginning or end of character strings
      <div
      className={`container-button ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
        {props.children}
      </div>
    )
}

//Don't forget to import the components
export default Button;