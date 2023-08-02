import './About.css';
import Certificate from ".//public/images/Certificate-JS.png"
function About() {
   return (
      <div className="Main-site-main">
         <img src="https://media.giphy.com/media/LOEI8jsNKPmzdJYvhJ/giphy.gif" alt="foto" />
         <p>I'm an enthusiastic and detail-oriented Frontend React Software Engineer, seeking an entry-level position with your company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.</p>
      <div>
      {Certificate}
         <img src="./public/images/Certificate-JS.png" alt="Certificate-JS" />
      </div>
      </div>
   )
}
export default About;