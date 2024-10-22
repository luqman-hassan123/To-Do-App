import React from "react";

const Buttons = ({ title, className, onButtonClick }) => {
  return (
    
      <button
        className={className}
        title={title}
        onClick={() => onButtonClick()} > {title}
      </button>
  
  );
};

export default Buttons;
