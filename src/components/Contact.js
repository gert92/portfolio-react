import React, { useState } from 'react';
import axios from 'axios';
import Alert from './Alert';

const Contact = () => {
  const [disabled, setDisabled] = useState(false);
  const [alert, setAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const mailer = () => {
    if (disabled) {
      return (
        <button disabled className="btn btn--disabled">
          Loading...
        </button>
      );
    } else {
      return <button className="btn btn--solid">Send Message</button>;
    }
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    const body = formData;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      setDisabled(true);
      const res = await axios.post(
        'https://gertport.herokuapp.com/email',
        body,
        config
      );
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
      if (res.data.success) {
        setDisabled(false);
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="contact" id="contacts">
      {alert ? <Alert message="Message sent successfully" /> : null}
      <h2 className="contact__title">Contact Me</h2>
      <div className="contact__content">
        {/* <div className="contact__content__info">
          <h3>Contact info</h3>
          <p>
            {' '}
            <svg>
              <use xlinkHref={`${icons}#icon-mail`}></use>
            </svg>
            gert.mosin@gmail.com
          </p>
          <p>
            {' '}
            <svg>
              <use xlinkHref={`${icons}#icon-phone`}></use>
            </svg>
            +372 56266159
          </p>
          <p>
            {' '}
            <svg>
              <use xlinkHref={`${icons}#icon-globe`}></use>
            </svg>
            www.gertmosin.ee
          </p>
        </div> */}
        <form className="form contact__content__form" onSubmit={sendEmail}>
          <div className="form__row">
            <div className="form__item">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                aria-label="Name"
                placeholder="Type your name"
                name="name"
                onChange={handleChange}
                value={formData.name}
              />
            </div>
          </div>
          <div className="form__row">
            <div className="form__group">
              <div className="form__item">
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  aria-label="Phone"
                  inputMode="tel"
                  placeholder="Type your phone number"
                  name="phone"
                  onChange={handleChange}
                  value={formData.phone}
                />
              </div>
              <div className="form__item">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  aria-label="Email"
                  inputMode="email"
                  placeholder="Type your email address"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
            </div>
          </div>
          <div className="form__row">
            <div className="form__item">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                type="text"
                aria-label="Message"
                placeholder="Type your message here"
                cols="50%"
                rows="12"
                name="message"
                onChange={handleChange}
                value={formData.message}
              />
            </div>
          </div>
          <div className="form__row">{mailer()}</div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
