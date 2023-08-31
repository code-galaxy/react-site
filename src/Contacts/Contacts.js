import "./Contacts.css";


export default function Contacts() {

   async function formSend(event) {
      event.preventDefault();
      const form = event.target.elements;
      const formName = form.name.value;
      const formEmail = form.email.value;
      const formText = form.textarea.value;
      console.log(form);

      console.log(formName);
      console.log(formEmail);
      console.log(formText);

      let formData = new FormData();
      console.log(formData);
      formData.append("name", formName);
      formData.append("email", formEmail);
      formData.append("message", formText);

      let response = await fetch('sendmail.php', {
         method: 'POST',
         body: formData
      });

      if (response.ok) {
         let result = await response.json();
         console.log(result.message);
         // form.name.value = '';
         // form.email.value = '';
         // form.textarea.value = '';
         form.reset();
      }
      else {
         alert("error")
      }


      let error = formValidate(form);


   }

   function formValidate() {
      let error = 0;

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
               <form action="#" onSubmit={formSend}>
                  <div><input type="text" name="name" placeholder="Your Name" /></div>
                  <div><input type="text" name="email" placeholder="Your Email" /></div>
                  <textarea name="textarea" id="textarea" cols="" rows="5" placeholder="Message"></textarea>
                  <div><button className="contacts-btn" type="sumbit">Send to me</button></div>
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