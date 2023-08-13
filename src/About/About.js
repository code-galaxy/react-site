import './About.css';
import certificateHtmlCss from "./images/Certificate-HTML&CSS.png";
import certificateJS from "./images/Certificate-JS.png";
import certificateJsFunc from "./images/Certificate-JS-Function.png";
import certificateJSArray from "./images/Certificate-JS-Array-Methods.png";

export default function About() {
   return (
      <div className="About-site">
         <div className="about-summary"><p>I'm an enthusiastic and detail-oriented Frontend React Software Engineer, seeking an entry-level position with your company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.</p></div>
         <div className="about-description trek">
            <div className="about-stack">
               <h2>Skills</h2>
               <ul>
                  <li>Java Script</li>
                  <li>HTML & CSS</li>
                  <li>React JS</li>
                  <li>React SPA, MPA</li>
                  <li>React-router-dom</li>
                  <li>Redux toolkit</li>
                  <li>Redux</li>
                  <li>Cypress test automate</li>
                  <li>MySQL</li>
                  <li>Git</li>
                  <li>Bootstrap</li>
                  <li>JIRA, Agile/Scram</li>
               </ul>
            </div>
            <div className="about-experience">
               <h2>Experience in IT</h2>
               <ul>
                  <li>Click <a href="https://github.com/code-galaxy" target="_blanc"><span>here</span></a> to see my GitHub.</li>
                  <li>React JS</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                  <li>Development of a Landing page <br /> with use HTML, CSS, Bootstrap </li>
                  <li>5</li>
                  <li>Cypress test automate</li>
                  <li>MySQL</li>
                  <li>Git</li>
                  <li>Bootstrap</li>
                  <li>JIRA, Agile/Scram</li>
               </ul>
            </div>
            <div className="personal-qualities">
               <h2>Personal-qualities</h2>
               <ul>
                  <li>A creative thinker, able to conceptualise innovative  <br />solution for complex problems.</li>
                  <li>Able to prioritise tasks effectively, ensuring efficient <br /> allocation of time and resources to maximise productivity.</li>
                  <li>Skilled in desicion making, conflict resolution and <br /> strategic planning, enabling sucsessful project execution <br /> and team efficiency.</li>
                  <li>Highly self motivated profesional whith strong <br />intrinsic drive to excel and achieve results.</li>
                  <li>Skilled in managing complex projects, effectively  <br />allocating resourses ande optimising team productivity.</li>
                  <li> Able to leverege persuasive communication tachniques<br />to negotiate with key stakeholders and drive positive <br />outcomes for organizations.</li>
                  <li>Able to mediate complex disputes, utalisting diplomacy  <br />to find common ground + preserve key relationships for <br /> successful project outcomes.</li>
                  <li>Attentive to details, reliable, fast learner.</li>
                  <li>Independent and punctual.</li>
               </ul>
            </div>
         </div>
         <div className='about-link-cv'><a href="https://drive.google.com/file/d/1-vN6aybL5JkXzeTudpL_JlUc6JTrrcSr/view?usp=drive_link" target='_blanc'>Download CV</a></div>

         <div className='about-certificate'>
            <h2>CERTIFICATES</h2>
            <div className="about-img">
               <a href="https://itgid.info/ua/certificate/view?Certificate%5Buid%5D=htsf6fmr4qdk" target="_blanc" ><img src={certificateHtmlCss} alt="HTML&CSS" title="HTML&CS" /></a>
               <a href="https://itgid.info/ua/certificate/view?Certificate%5Buid%5D=7e2t9kftqa9d" target="_blanc"><img src={certificateJS} alt="Java Script" title="Java Script" /></a>
               <a href="https://itgid.info/ua/certificate/view?Certificate%5Buid%5D=3ytamf9u8sfd" target="_blanc"><img src={certificateJsFunc} alt="JS Function" title="JS Function" /></a>
               <a href="https://itgid.info/ua/certificate/view?Certificate%5Buid%5D=19rd8j5suecn" target="_blanc"> <img src={certificateJSArray} alt="JS Array Method" title="JS Array Method" /></a>
            </div>
         </div>
      </div>
   )
}