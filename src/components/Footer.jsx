import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../style/Footer.module.css'

const Footer = () => {
   return (
      <footer className={classes.footer}>
        <div className={classes.footerContent}>
          <div className={classes.footerSection}>
            <h4>Адреса заведений</h4>
            <p>Киевская 71</p>
            <p>Токомбаева 21/1</p>
            <p>Ахунбаева 175</p>
          </div>
  
          <div className={classes.footerSection}>
            <h4>Режим работы</h4>
            <p>Пн-Вс 11:00-23:00</p>
          </div>
  
          <div className={classes.footerSection}>
            <h4>Контакты</h4>
            <p>Телефон: <a href="tel:+996703881788">+996 703 88 17 88</a></p>
            <ul className={classes.socialLinks}>
              <li>
                <p style={{display:'flex', gap:"0.3rem"}}>Instagram: 
                   <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
               </p>
              </li>
              <li>
              <p style={{display:'flex', gap:"0.3rem"}}>WhatsApp: 
                <a href="https://api.whatsapp.com" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
               </p>
              </li>
            </ul>
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
