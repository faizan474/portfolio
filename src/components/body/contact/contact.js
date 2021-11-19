import React from 'react';
import SocialContact from '../../common/social-contact/socialContact';
import './contact.css';
import ContactForm from './contactForm/contactForm';
function Contact() {
    return (
        <div className="contact">
            <label>Contact Me</label>
            <ContactForm />
            <SocialContact />
        </div>
         )
}

export default Contact;
