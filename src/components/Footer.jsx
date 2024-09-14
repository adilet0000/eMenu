import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'; // Social media icons
import classes from '../style/Footer.module.css';

const Footer = () => {
   return (
      <footer className={classes.footer}>
        <div className={classes.footerContent}>
  
          <div className={classes.footerSection}>
            <h4>Working Hours</h4>
            <p>Mon-Sun 11:00-23:00</p>
          </div>
  
          <div className={classes.footerSection}>
            <h4>Contacts</h4>
            <p>Phone: <a href="tel:+996703881788">+996 703 88 17 88</a></p>
            <div className={classes.socialLinks}>

                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className={classes.socialIcon} /> Instagram
                </a>

                <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className={classes.socialIcon} /> WhatsApp
                </a>

            </div>
          </div>
        </div>
        <div className={classes.footerBottom}>
          <p>
            Powered by{' '}
            <a href="https://kamiqr.kz" target="_blank" rel="noopener noreferrer">
               Salymbekov University
            </a>
          </p>
          <p>&copy; Salymbekov University College</p>
        </div>
      </footer>
    );
};

export default Footer;
