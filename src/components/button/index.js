import React from 'react'
import '../styles.css'
import './button.css'

const Button = ({
  children,
  size = '0.9rem',
  handleClick,
  disabled,
  load,
}) => {
  return (
    <div>
      <button onClick={handleClick}>
        <span className="button_top"> { children }
        </span>
      </button>
    </div>
  )
}

export default Button;
