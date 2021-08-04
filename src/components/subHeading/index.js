import React from 'react'
import '../styles.css'

const SubHeading = ({
  number,
  text
}) => {
  return (
    <div className="subheading">
      <span className="number">{number}.</span> {text}
    </div>
  )
}

export default SubHeading;
