import React from 'react'
import '../styles.css'

const Button = ({
  children,
  size = '0.9rem',
  handleClick,
}) => {
  return (
    <button className="button" style={{ fontSize: size }} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button;
