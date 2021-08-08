import React from 'react'
import '../styles.css'

const Links = ({
  position = "relative"
}) => {
  if (position === "fixed") {
    return (
      <div className="links">
        <span className="circle"></span>
        <a href="#" className="link git"><i className="fab fa-github"></i></a>
        <a href="#" className="link ig"><i className="fab fa-instagram"></i></a>
        <a href="#" className="link fb"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="link in"><i className="fab fa-linkedin-in"></i></a>
      </div>
    )
  } else {
    return (
      <div>
        <a href="#" className="link contact-link"><i className="fab fa-github"></i></a>
        <a href="#" className="link contact-link"><i className="fab fa-instagram"></i></a>
        <a href="#" className="link contact-link"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="link contact-link"><i className="fab fa-linkedin-in"></i></a>
      </div>
    )
  }
}

export default Links;
