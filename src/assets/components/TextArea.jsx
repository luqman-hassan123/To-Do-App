import React from 'react';

const TextArea = ({ value, onChange, placeholder }) => {
  return (
    
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={4} // Set the number of rows for the textarea
        className="form-control" // Use Bootstrap class for styling
      />
  );
};

export default TextArea;
