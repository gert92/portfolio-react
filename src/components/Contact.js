import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h3>Contact Me</h3>
        <div className="contactcontent">
          <div className="contactinfo">
            <h6>Contact info</h6>
            <p>gert.mosin@gmail.com</p>
            <p>+372 56266159</p>
            <p>www.gertmosin.ee</p>
          </div>
          <div className="contactform">
            <form action="#">
              <div className="formrow">
                <div className="formitem">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    aria-label="Name"
                    placeholder="Type your name"
                  />
                </div>
              </div>
              <div className="formrow">
                <div className="formgroup">
                  <div className="formitem">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      aria-label="Phone"
                      inputMode="tel"
                      placeholder="Type your phone number"
                    />
                  </div>
                  <div className="formitem">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      aria-label="Email"
                      inputMode="email"
                      placeholder="Type your email address"
                    />
                  </div>
                </div>
              </div>
              <div className="formrow">
                <div className="formitem">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    type="text"
                    aria-label="Message"
                    placeholder="Type your message here"
                    cols="50%"
                    rows="12"
                  />
                </div>
              </div>
              <div className="formrow">
                <button>Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
