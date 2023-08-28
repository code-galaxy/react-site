import "./Contacts.css";


export default function Contacts() {

   const sendRequest = (event) => {
      event.preventDefault();
      console.log(true)
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
               <form action="" onSubmit={sendRequest}>
                  <div><input type="text" name="filename" placeholder="Your name"/></div>
                  <div><input type="text" name="filedata" placeholder="Email address"/></div>
                  <textarea name="textarea" id="textarea" cols="" rows="5" placeholder="Text"></textarea>
                  <div><button className="contacts-btn" type="sumbit">Send me</button></div>
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