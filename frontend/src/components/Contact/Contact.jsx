import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="me-5">
       <h2 className="heading">Contact Me</h2>
      <form className="contact-form">
        <label htmlFor="name">Name *</label>
        <input type="text" placeholder='Name' id="name" name="name" required />

        <label htmlFor="phone">Phone *</label>
        <input type="tel" placeholder='Phone'  id="phone" name="phone" required />

        <label htmlFor="message">Message *</label>
        <textarea id="message" placeholder='message'   name="message" required></textarea>

        <button type="submit" className='submit-button'>Submit</button>
      </form>
    </section>
  );
};

export default Contact;
