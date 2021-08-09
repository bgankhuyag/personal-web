import React from 'react'
import '../styles.css'

const Button = ({
  children,
  size = '0.9rem',
  handleClick,
  disabled,
  load,
}) => {
  return (
    <button className="button" style={{ fontSize: size, background: load ? 'rgb(166, 242, 255, 0.15)' : null }} onClick={handleClick} disabled={disabled || load ? true : false}>
      {
        load ?
        <i className="fas fa-spinner spinner"></i>
        : null
      }
      {children}
    </button>
  )
}

export default Button;
