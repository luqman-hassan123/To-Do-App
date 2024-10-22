import React, { children, className } from 'react'



const Card = ({children , description, className}) => {
  return (
    <div className={className}  desciption={description}>
     {children}
     <p className="card-text">{description}</p>
      
    </div>
  )
}

export default Card
