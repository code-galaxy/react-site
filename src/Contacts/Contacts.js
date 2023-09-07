import "./Contacts.css";
import emailjs from '@emailjs/browser';
import React from 'react';

export default function Contacts() {

   const form = React.useRef();
   console.log(form)


   const sendEmail = (e) => {
      e.preventDefault();
      if (form.current.user_name.value.length > 2 && typeof +form.current.user_name.value !== "number") {
         form.current.user_name.classList.remove('_error');
         console.log(form.current.user_name.value);
         console.log(form.current.user_name.value.length);
      }
      else {
         form.current.user_name.classList.add('_error');
         alert(`Enter your name`)
      }
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
               <p> <i className="fas fa-map-marker-alt icon"> </i>  Ukraine, Ivano-Frankivsk city </p>
               <p>  <i className="fas fa-envelope icon"></i><a href="#"> ykarpash@gmail.com </a></p>
               <p>  <i className="fas fa-phone-square icon"></i> +38 050 678 7000 </p>
               <div className="contacts-first-icon icon">
                  <a href="https://www.facebook.com/ykarpash" target="_blank"><i className="fab fa-facebook-f icon"></i></a>
                  <a href="https://github.com/code-galaxy" target="_blank"><i className="fab fa-brands fa-github icon"></i></a>
                  <a href="https://www.linkedin.com/in/yaroslav-karpash-aa7b051a2/" target="_blanc"><i className="fab fa-linkedin icon"></i></a>
               </div>
            </div>
            <div className="contacts-form">
               <form ref={form} onSubmit={sendEmail}>
                  <div>
                     {/* <label htmlFor="formName" className="labelForm">* Name:</label> */}
                     <input id="formName" type="text" name="user_name" placeholder="Name" />
                  </div>
                  <div>
                     {/* <label htmlFor="formEmail" className="labelForm">* E-mail:</label> */}
                     <input id="formEmail" type="email" name="user_email" placeholder="Email" />
                  </div>
                  {/* <label htmlFor="formMessage"className="labelForm">Message:</label> */}
                  <textarea name="message" id="formMessage" cols="1" rows="5" placeholder="Message"></textarea>
                  <div><button className="contacts-btn" type="sumbit" value="Send">Send to me</button></div>
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