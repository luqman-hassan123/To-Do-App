import React from "react";

const Button = ({ title, className, onButtonClick }) => {
  return (
  
        <button
        className={className}
        title={title}
        onClick={() => onButtonClick()} > {title}
      </button>
 
    
  
  );
};

export default Button;
