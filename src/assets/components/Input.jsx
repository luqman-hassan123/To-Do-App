import React from 'react';

const Input = ({ placeholder, className, value, onChange }) => {
  return (
    <input
      type="text"
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange} // Use onChange here
    />
  );
};

export default Input;
