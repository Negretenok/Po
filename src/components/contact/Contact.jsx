import React from 'react';
import './contact.css';

const Contact = () => {
    return (
      <section className="contact section" id="contact">
        <div className="container">
          <h2 className="section__title">Get in Touch</h2>
          <span className="section__subtitle">I'd love to hear from you!</span>
  
          <div className="contact__content">
            <div className="contact__info">
              <h3 className="contact__info-title">Contact Information</h3>
              <ul className="contact__info-list">
                <li className="contact__info-item">
                  <i className="uil uil-phone contact__icon"></i>
                  <span className="contact__text">Phone: <strong>0707608607</strong></span>
                </li>
                <li className="contact__info-item">
                  <i className="uil uil-envelope contact__icon"></i>
                  <span className="contact__text">Email: <strong>anzalya.mem@gmail.com</strong></span>
                </li>
                <li className="contact__info-item">
                  <i className="uil uil-map-marker contact__icon"></i>
                  <span className="contact__text">Location: <strong>Bishkek,Kyrgystan</strong></span>
                </li>
              </ul>
            </div>
  
            <div className="contact__form">
              <h3 className="contact__form-title">Send me a Message</h3>
              <form action="#" className="contact__form-content">
                <div className="contact__form-group">
                  <input
                    type="text"
                    className="contact__form-input"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <input
                    type="email"
                    className="contact__form-input"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="contact__form-group">
                  <textarea
                    className="contact__form-input"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn--primary contact__form-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;
