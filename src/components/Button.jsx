import React from 'react';

const Button = ({ 
  Titulo = "default", 
  type = "submit",
  color = "btn-primary",
  className = "",
  onClick = () => {},    
 }) => (
  <button type={type} onClick={onClick} className={`btn ${className}`}>
    {Titulo}
  </button>
);

export default Button;

