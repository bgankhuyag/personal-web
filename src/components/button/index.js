import React from 'react'
import '../styles.css'

const Button = ({
  children,
  size = '0.9rem',
}) => {
  return (
    <button className="button" style={{ fontSize: size }}>
      {children}
    </button>
  )
}

export default Button;
