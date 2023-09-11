import "./Contacts.css";

import React from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



export default function Contacts() {


   const form = React.useRef();
   console.log(form)


   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_4enlo03', 'template_4z25psi', form.current, 'SwNdTQVxGtB-PrYXL')
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });
      form.current.user_name.value = "";
      form.current.user_email.value = "";
      form.current.message.value = "";
   }



   return (
      <div className="Contacts-site">
         <div className="contacts-description">
            <h1 >Connect. Chat.</h1>
            <p>If you want to get in touch, fill out the form below and I’ll get right back to you. <br /> Alternatively, you can use any of our social channels to reach with me.</p>
         </div>
         <div className="container-contacts">
            <div className="contacts-info">
               <div className="contacts-info-icon">
                  <p><a href="https://www.google.com.ua/maps/place/%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA,+%D0%86%D0%B2%D0%B0%D0%BD%D0%BE-%D0%A4%D1%80%D0%B0%D0%BD%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+76000/@48.9118221,24.6759296,13z/data=!3m1!4b1!4m6!3m5!1s0x4730c16c34b0381d:0xd6d32394e59e41c2!8m2!3d48.922633!4d24.711117!16zL20vMDJrNnZ4?entry=ttu" target="_blanc">Ukraine, Ivano-Frankivsk city</a></p>
                  <FontAwesomeIcon icon={faLocationDot} className="icon" />
               </div>
               <div className="contacts-info-icon">
                  <p><a href="mailto:ykarpash@gmail.com">ykarpash@gmail.com </a></p>
                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
               </div>
               <div className="contacts-info-icon">
                  <p><a href="tel:+380506787000">+38 050 678 7000</a></p>
                  <FontAwesomeIcon icon={faSquarePhone} className="icon" />
               </div>
               <div className="contacts-info-icon">
                  <p><a href="https://github.com/code-galaxy" target="_blank">.code-galaxy</a></p>
                  <a href="https://github.com/code-galaxy" target="_blank">
                     <FontAwesomeIcon icon={faGithub} className="icon" />
                  </a>
               </div>
               <div className="contacts-info-icon">
                  <p><a href="https://www.linkedin.com/in/yaroslav-karpash-aa7b051a2" target="_blank"> I`m here</a></p>
                  <a href="https://linkedin.com/in/yaroslav-karpash-aa7b051a2" target="_blank">
                     <FontAwesomeIcon icon={faLinkedin} className="icon" />
                  </a>
               </div>
               <div className="contacts-info-icon">
                  <p><a href="https://www.facebook.com/ykarpash" target="_blank">And here I am</a></p>
                  <a href="https://www.facebook.com/ykarpash" target="_blank"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
               </div>
            </div>
            <div className="contacts-form">
               <form ref={form} onSubmit={sendEmail}>
                  <div>
                     <label htmlFor="formName" className="labelForm">Name:</label>
                     <input id="formName" type="text" name="user_name" placeholder="Required" />
                  </div>
                  <div>
                     <label htmlFor="formEmail" className="labelForm">E-mail:</label>
                     <input id="formEmail" type="email" name="user_email" placeholder="Required" />
                  </div>
                  <label htmlFor="formMessage" className="labelForm">Message:</label>
                  <textarea name="message" id="formMessage" cols="1" rows="5" placeholder="Message"></textarea>
                  <div>
                     <button className="contacts-btn" type="sumbit" value="Send">Send</button>
                  </div>
               </form>
            </div>
         </div>
         <div className="contacts-copyright">
            <p> <span>.code-galaxy</span> tech </p>
            <p>2023 Copyrigth. All rigths reserved</p>
         </div>
      </div>
   )
}