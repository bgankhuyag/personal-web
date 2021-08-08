import React from 'react'
import '../styles.css'

const SubHeading = ({
  number,
  text
}) => {
  return (
    <h3 className="subheading">
      <span className="number">{number}.</span> {text}
    </h3>
  )
}

export default SubHeading;
