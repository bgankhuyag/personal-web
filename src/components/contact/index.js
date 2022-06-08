import React, { useState } from 'react'
import SubHeading from 'components/subHeading'
import Links from 'components/links'
import Button from 'components/button'
import Toast from 'components/toast'
import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import { user_id, service_id, template_id } from 'EnvironmentConfig/email'
import { showOnScroll } from 'utils/functions'
import '../styles.css'

init(user_id);

const Error = ({ message }) => {
  return (
    <span className="error-message"><i className="fas fa-info-circle"></i> {message}</span>
  )
}

const Contact = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validMessage, setValidMessage] = useState(true);
  const [load, setLoad] = useState(false);
  const [toast, setToast] = useState({
    item: null,
    duration: null,
    load: null,
    success: null
  });

  showOnScroll('contact');

  const handleChangeName = (e) => {
    setName(e.target.value)
    if (e.target.value !== '') {
      removeErrorName();
    } else {
      addErrorName();
    }
  }

  const handleChangeMsg = (e) => {
    setMessage(e.target.value)
    if (e.target.value !== '') {
      removeErrorMsg();
    } else {
      addErrorMsg();
    }
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
    if (e.target.value !== '') {
      if (validateEmail(e.target.value)) {
        removeErrorEmail();
      } else {
        addErrorEmail();
      }
    } else {
      addErrorEmail();
    }
  }

  const addErrorName = () => {
    document.getElementById('from-name').classList.add('error');
    setValidName(false);
  }

  const removeErrorName = () => {
    document.getElementById('from-name').classList.remove('error');
    setValidName(true);
  }

  const addErrorEmail = () => {
    document.getElementById('from-email').classList.add('error');
    setValidEmail(false);
  }

  const removeErrorEmail = () => {
    document.getElementById('from-email').classList.remove('error');
    setValidEmail(true);
  }

  const addErrorMsg = () => {
    document.getElementById('message').classList.add('error');
    setValidMessage(false);
  }

  const removeErrorMsg = () => {
    document.getElementById('message').classList.remove('error');
    setValidMessage(true);
  }

  const validateEmail = (val) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(val);
  }

  const validateForm = () => {
    var valid = true;
    if (name === '') {
      addErrorName();
      valid = false;
    } else {
      removeErrorName();
    }
    if (email === '') {
      addErrorEmail();
      valid = false;
    } else {
      if (validateEmail(email)) {
        removeErrorEmail();
      } else {
        addErrorEmail();
        valid = false;
      }
    }
    if (message === '') {
      addErrorMsg();
      valid = false;
    } else {
      removeErrorMsg();
    }
    return valid;
  }

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return false;
    setLoad(true);
    setToast({
      item: 'Sending Message...',
      duration: 0,
      load: true
    });
    emailjs.send(service_id, template_id,{
      from_name: name,
      message: message,
      reply_to: email,
    }).then((response) => {
      setName('');
      setEmail('');
      setMessage('');
      setLoad(false);
      setToast({
        item: 'Message successfully sent!',
        duration: 3000,
        load: false,
        success: true
      });
    }, (error) => {
      setLoad(false);
      setToast({
        item: 'Sorry, there was an error!',
        duration: 3000,
        load: false,
        success: false
      });
    });
  }

  return (
    <>
    <Toast item={toast.item} duration={toast.duration} load={toast.load} success={toast.success} />
    <div className="contact sub-content" id="contact">
      <SubHeading number="11" text="Contact" />
      <div className="contact-content">
        <form className="contact-form body-text">
          <p>
            If you have any questions about me or want to get
            in touch, feel free to contact me by email.
          </p>
          <div className="info">
            <div className="contact-message">
              <label htmlFor="from-name" id="from-name-label">Name</label>
              <input className="input" type="text" id="from-name" value={name} onChange={(e) => handleChangeName(e)} />
              {
                validName ? null :
                <Error message="Please enter your name" />
              }
            </div>
            <div className="contact-message">
              <label htmlFor="from-email" id="from-email-label">Email</label>
              <input className="input" type="email" id="from-email" value={email} onChange={(e) => handleChangeEmail(e)} />
              {
                validEmail ? null :
                <Error message="Please enter a valid email" />
              }
            </div>
          </div>
          <div className="contact-message">
            <label htmlFor="message" id="message-label">Message</label>
            <textarea className="input" id="message" rows="10" value={message} onChange={(e) => handleChangeMsg(e)} />
            {
              validMessage ? null :
              <Error message="Please enter your message" />
            }
          </div>
          <div style={{ textAlign: 'right', disabled: 'true' }}>
            <Button size="1rem" handleClick={handleSendEmail} load={load}>Send</Button>
          </div>
        </form>
        <p>
          Bellow are my social media pages and my github page:
        </p>
        <Links position="relative" />
      </div>
    </div>
    </>
  )
}

export default Contact;
