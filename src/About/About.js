import './About.css';
import certificateHtmlCss from "./images/Certificate-HTML&CSS.png";
import certificateJS from "./images/Certificate-JS.png";
import certificateJsFunc from "./images/Certificate-JS-Function.png";
import certificateJSArray from "./images/Certificate-JS-Array-Methods.png";
import certificateReactJS from "./images/Certificate-ReactJS.png";
import { Link } from 'react-router-dom';


export default function About() {
   return (
      <div className="About-site">
         <div className="about-summary"><p>I'm an enthusiastic and detail-oriented Frontend React Software Engineer, seeking an entry-level position with your company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects.</p></div>
         <div className="about-description trek">
            <div className="about-stack">
               <h2>Skills</h2>
               
               <ul>
                  <li>Java Script </li>
                  <li>HTML & CSS </li>
                  <li>React JS</li>
                  <li>React SPA, MPA</li>
                  <li>React-router-dom</li>
                  <li>Redux toolkit</li>
                  <li>Redux</li>
                  <li>Cypress test automate</li>
                  <li>MySQL </li>
                  <li>Git</li>
                  <li>Bootstrap</li>
                  <li>JIRA, Agile/Scram</li>
               </ul>
            </div>
            <div className="about-experience">
               <h2>Experience in IT</h2>
               <ul>
                  <li>Click <a href="https://github.com/code-galaxy" target="_blanc"><span>here</span></a> to see my GitHub.</li>
                  <li><h4><Link to="/projects">Counter</Link></h4> – created with React JS, used useState().</li>
                  <li><h4><Link to="/projects">Modal window</Link></h4> – created with React JS, used useState(), useRef().</li>
                  <li><h4><Link to="/projects">Get user data</Link></h4>– created with React JS, used useState(), <br />useRef(), useEffect() and fetch(“ ”).</li>
                  <li><h4><Link to="/projects">Todo list</Link></h4> - created with React JS <br />(the project is under development) </li>
                  <li><h4><a href="https://code-galaxy.github.io/stopwatch.github.io/" target="_blanc">Stopwatch project</a></h4> – created with JavaScript, HTML and  CSS.</li>
                  <li><h4><a href="https://github.com/code-galaxy/weather-forecast-api-github.io/tree/main" target="_blanc">Weather forecast API project </a></h4>– created with Java Script, used fetch.</li>
                  <li><h4><a href="https://code-galaxy.github.io/slider-motivation.github.io/" target="_blanc">Slider project</a></h4> – created with JavaScript, HTML and CSS.</li>
                  <li><h4><a href="https://code-galaxy.github.io/Tourism/">Landing page project</a></h4> – created with Bootstrap, SCSS, HTML, CSS.</li>
                  <li><h4><a href="https://github.com/code-galaxy/QA-study/tree/main/Cypress%20-%20Automation%20Practice" target="_blanc">Cypress test automate</a></h4></li>
                  <li><h4><a href="https://github.com/code-galaxy/MySQL" target="_blanc">MySQL</a></h4></li>
               </ul>
            </div>
            <div className="personal-qualities">
               <h2>Personal-qualities</h2>
               <ul>
                  <li>A creative thinker, able to conceptualise innovative  solution for complex problems.</li>
                  <li>Able to prioritise tasks effectively, ensuring efficient allocation of time and resources to maximise productivity.</li>
                  <li>Skilled in desicion making, conflict resolution and  strategic planning, enabling sucsessful project execution and team efficiency.</li>
                  <li>Highly self motivated profesional whith strong intrinsic drive to excel and achieve results.</li>
                  <li>Skilled in managing complex projects, effectively  allocating resourses ande optimising team productivity.</li>
                  <li> Able to leverege persuasive communication tachniquesto negotiate with key stakeholders and drive positive outcomes for organizations.</li>
                  <li>Able to mediate complex disputes, utalising diplomacy to find common ground + preserve key relationships for successful project outcomes.</li>
                  <li>Attentive to details, reliable, fast learner.</li>
                  <li>Independent and punctual.</li>
               </ul>
            </div>
         </div>
         <div className='about-link-cv'><a href="https://drive.google.com/file/d/1-vN6aybL5JkXzeTudpL_JlUc6JTrrcSr/view?usp=drive_link" target='_blanc'>download CV</a></div>

         <div className='about-certificate'>
            <h2>CERTIFICATES</h2>
            <div className="about-img">
               <a href="https://itgid.info/ua/certificate/view?Certificate%5Buid%5D=1pxf9mmvpru9" target="_blanc"> <img src={certificateReactJS} alt="React JS" title="React JS" /></a>
               <a href="https://itgid.info/ua/certificate/view?Certificate%5Buid%5D=7e2t9kftqa9d" target="_blanc"><img src={certificateJS} alt="Java Script" title="Java Script" /></a>
               <a href="https://itgid.info/ua/certificate/view?Certificate%5Buid%5D=3ytamf9u8sfd" target="_blanc"><img src={certificateJsFunc} alt="JS Function" title="JS Function" /></a>
               <a href="https://itgid.info/ua/certificate/view?Certificate%5Buid%5D=19rd8j5suecn" target="_blanc"> <img src={certificateJSArray} alt="JS Array Method" title="JS Array Method" /></a>
               <a href="https://itgid.info/ua/certificate/view?Certificate%5Buid%5D=htsf6fmr4qdk" target="_blanc" ><img src={certificateHtmlCss} alt="HTML&CSS" title="HTML&CS" /></a>

            </div>
         </div>
      </div>
   )
}