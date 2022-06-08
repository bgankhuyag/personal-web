import React from 'react'
import '../styles.css'

const Links = ({
  position = "relative"
}) => {
  if (position === "fixed") {
    return (
      <div className="links">
        <span className="circle"></span>
        <a href="#" target="blank" rel="noopener noreferrer" className="link git"><i className="fab fa-github"></i></a>
        <a href="#" target="blank" rel="noopener noreferrer" className="link ig"><i className="fab fa-instagram"></i></a>
        <a href="#" target="blank" rel="noopener noreferrer" className="link fb"><i className="fab fa-facebook-f"></i></a>
        <a href="#" target="blank" rel="noopener noreferrer" className="link in"><i className="fab fa-linkedin-in"></i></a>
      </div>
    )
  } else {
    return (
      <div>
        <a href="#" target="blank" rel="noopener noreferrer" className="link contact-link"><i className="fab fa-github"></i></a>
        <a href="#" target="blank" rel="noopener noreferrer" className="link contact-link"><i className="fab fa-instagram"></i></a>
        <a href="#" target="blank" rel="noopener noreferrer" className="link contact-link"><i className="fab fa-facebook-f"></i></a>
        <a href="#" target="blank" rel="noopener noreferrer" className="link contact-link"><i className="fab fa-linkedin-in"></i></a>
      </div>
    )
  }
}

export default Links;
