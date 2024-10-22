import React from 'react'

const Header = ({title, className}) => {
  return (
    <div className={className} title={title}> {title} </div>
  )
}

export default Header
