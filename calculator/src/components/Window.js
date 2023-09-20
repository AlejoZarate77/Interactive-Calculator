import React from 'react'
import '../Style-sheets/Window.css'

//Define as a constant so that the value cannot be reassigned
//Defined with JSX
//Destructuring instead of Props
const Window = ({ input }) => (
  <div className='input'>
    {input} 
  </div>
);

export default Window;