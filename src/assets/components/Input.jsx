import React from 'react'

const Input = ({ placeholder} ) => {
  return (

    <div className="mb-3">
    <input
      type="text"
      className="form-control"
      placeholder={placeholder} // Using the passed prop here
    />
  </div>
  )
}

export default Input
