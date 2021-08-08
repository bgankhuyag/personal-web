import React from 'react'
import SubHeading from 'components/subHeading'
import Links from 'components/links'
import '../styles.css'

const Contact = () => {
  window.addEventListener("scroll", () => {
    if (document.getElementById('contact').getBoundingClientRect().top <= (window.innerHeight * 2/3) && document.getElementById('contact').getBoundingClientRect().top !== 0) {
      document.getElementById('contact').classList.add('appear');
    }
  });

  return (
    <div className="contact sub-content" id="contact">
      <SubHeading number="11" text="Contact" />
      <div className="contact-content">
        <p>
          If you have any questions about me or want to get in touch,
          feel free to contact me by email at: <a className="email">batboldg2000@gmail.com</a>. <br />
          Bellow are my social media pages and my github page:
        </p>
        <Links position="relative" />
      </div>
    </div>
  )
}

export default Contact;
