import React from 'react'
import '../styles.css'

const Button = ({
  children,
  size = '0.9rem',
  handleClick,
  disabled,
}) => {
  return (
    <button className="button" style={{ fontSize: size }} onClick={handleClick} disabled={disabled ? true : false}>
      {children}
    </button>
  )
}

export default Button;
