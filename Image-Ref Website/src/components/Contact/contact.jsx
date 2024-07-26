import React from 'react';
import "./contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-left">
            <div className="contact-title">
                <FontAwesomeIcon icon={faPhone} />
                <p>Call Us</p> 
            </div>
            <p className="content">1 (234) 567-891, <br /> 1 (234) 987-654 </p>
        </div>
        <div className="contact-middle">
            <div className="contact-title">
                <FontAwesomeIcon icon={faLocationDot} />
                <p>Location</p> 
            </div>
            <p className="content">121, RockStreet, 21 Avenue, New York, NY <br /> 92103-9000</p>
        </div>
        <div className="contact-right">
            <div className="contact-title">
                <FontAwesomeIcon icon={faClock} />
                <p>Hours</p> 
            </div>
            <p className="content">Mon-Fri ...... 11am - 8pm, Sat, Sun ...... 6am -8pm</p>
        </div>
    </div>
  );
}

export default Contact;