import React from 'react'

const Dropdown = ({title , options, onChange, selectedValue}) => {
  return (
    <div className="mb-3">
      <label htmlFor="dropdown" className="form-label">{title}</label>
      <select 
        id="dropdown" 
        className="form-select" 
        onChange={onChange} 
        value={selectedValue} // Control the selected value
      >
        <option value="" disabled>Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
