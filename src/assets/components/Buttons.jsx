import React from "react";

const Buttons = ({ title, className, onButtonClick }) => {
  return (
    <div className="className">
        <button
        className={className}
        title={title}
        onClick={() => onButtonClick()} > {title}
      </button>
    </div>
    
  
  );
};

export default Buttons;
