import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="me-5">
       <h2 className="heading">Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Full Name *</label>
        <input type="text" placeholder='Enter Full Name' id="name" name="name" required />

        <label htmlFor="phone">Email Address *</label>
        <input type="tel" placeholder='Enter Email Address'  id="mail" name="mail" required />

        <label htmlFor="message">Message *</label>
        <textarea id="message" placeholder='message'   name="message" required></textarea>

        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </section>
  );
};

export default Contact;
