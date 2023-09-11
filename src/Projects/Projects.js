import './Projects.css';
import Project1 from './Project1/Project1';
import Project2 from './Project2/Project2';
import Project3 from './Project3/Project3';
import Project4 from './Project4/Project4';
import Project5 from './Project5/Project5';

function Projects() {
   return (
      <div className="Projects-container">
         <h2> Projects on React JS</h2>
        
         <section className="section project2-style">
            <div className="about-project">
               <h1>Project #5</h1>
               <h3><span>Todo list</span></h3>
               <p>Description :</p>
               <ul>
                  <li>Used React.useState()</li>
               </ul>
            </div>
            <div className="app-project">{<Project5 />}</div>
         </section>
       

         <section className="section project2-style">
            <div className="about-project">
               <h1>Project #4</h1>
               <h3><span>Login page</span></h3>
               <p>Description :</p>
               <ul>
                  <li>Used React.useState()</li>
               </ul>
            </div>
            <div className="app-project">{<Project4 />}</div>
         </section>

         <section className="section project2-style">
            <div className="about-project">
               <h1>Project #3</h1>
               <h3> <span> Get user data </span></h3>
               <p>Description :</p>
               <p>I get the data from with fetch <br />("https://jsonplaceholder.typicode.com/users") </p>
               <ul>
                  <li>Used React.useEffect()</li>
                  <li>Used React.useState()</li>
                  <li>Used React.useRef()</li>
               </ul>
            </div>
            <div className="app-project">{<Project3 />}</div>
         </section>

         <section className="section project2-style">
            <div className="about-project">
               <h1>Project #2</h1>
               <h3> <span>Modal window</span>  </h3>
               <p>Description :</p>
               <ul>
                  <li>Used React.useState() </li>
                  <li>Conditional rendering</li>
               </ul>
            </div>
            <div className="app-project">{<Project2 />}</div>
         </section>

         <section className="section">
            <div className="about-project">
               <h1>Project #1</h1>
               <h3><span>Counter</span> </h3>
               <p>Description :</p>
               <p>Used React.useState() </p>
            </div>
            <div className="app-project">{<Project1 />}</div>
         </section>
      </div>
   )
}

export default Projects;