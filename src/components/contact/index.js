import React, { useState } from 'react'
import SubHeading from 'components/subHeading'
import Links from 'components/links'
import Button from 'components/button'
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { user_id, service_id, template_id } from 'EnvironmentConfig/email'
import '../styles.css'

init(user_id);

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  window.addEventListener("scroll", () => {
    if (document.getElementById('contact').getBoundingClientRect().top <= (window.innerHeight * 4/5)) {
      document.getElementById('contact').classList.add('appear');
    }
  });

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeMsg = (e) => {
    setMessage(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const validateForm = () => {
    if (name === '') {

    }
    if (email === '') {

    }
    if (message === '') {

    }
  }

  const handleSendEmail = (e) => {
    e.preventDefault();
    emailjs.send(service_id, template_id,{
      from_name: name,
      message: message,
      reply_to: email,
    }).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
    });
  }

  return (
    <div className="contact sub-content" id="contact">
      <SubHeading number="11" text="Contact" />
      <div className="contact-content">
        <form className="contact-form">
          <p>
            If you have any questions about me or want to get
            in touch, feel free to contact me by email.
          </p>
          <div className="info">
            <div className="contact-message">
              <label for="from-name">Name</label>
              <input className="input" type="text" id="from-name" value={name} onChange={(e) => handleChangeName(e)} />
            </div>
            <div className="contact-message">
              <label for="from-email">Email</label>
              <input className="input" type="email" id="from-email" value={email} onChange={(e) => handleChangeEmail(e)} />
            </div>
          </div>
          <div className="contact-message">
            <label for="message">Message</label>
            <textarea className="input" id="message" rows="10" value={message} onChange={(e) => handleChangeMsg(e)} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <Button size="1rem" handleClick={handleSendEmail}>Send</Button>
          </div>
        </form>
        <p>
          Bellow are my social media pages and my github page:
        </p>
        <Links position="relative" />
      </div>
    </div>
  )
}

export default Contact;
