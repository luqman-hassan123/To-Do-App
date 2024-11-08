import React from 'react';

const TextArea = ({ value, onChange, placeholder, className }) => {
  return (
    
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4} // Set the number of rows for the textarea
        className= {className} // Use Bootstrap class for styling
      />
  );
};

export default TextArea;
